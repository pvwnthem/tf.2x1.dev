import { redirect } from "next/navigation";
import { verifyToken } from "@services/users.service";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const token = searchParams.get("token");

    if (token) {
        await verifyToken(token);
    }

    redirect("/verify/thanks");
}
