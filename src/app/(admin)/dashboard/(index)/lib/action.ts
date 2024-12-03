'use server'

import { redirect } from "next/navigation";
import { ActionResult } from "../../../../../../types";
import { getUser, lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export async function Logout(
    _: unknown,
    formData: FormData
): Promise<ActionResult> {
    console.log('logout');

    const {session} = await getUser()

    if (!session) {
        return {
            error: 'Unauthorized'
        }
    }

    await lucia.invalidateSession(session.id)

    const sessionCookie = lucia.createBlankSessionCookie()

    ;(await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return redirect('/dashboard/sign-in')
}