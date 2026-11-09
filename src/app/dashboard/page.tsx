import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import SpyroApp from "@/components/spyro/App";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
    let session: any = null;
    try {
        // @ts-ignore
        session = await auth();
    } catch (e) {
        console.error("Page auth error:", e);
    }
    if (!session?.user) {
        redirect("/login");
    }

    let t: any;
    try {
        t = await getTranslations("dashboard");
    } catch (e) {
        console.error("Dashboard translations error:", e);
        const enMessages = (await import("@/i18n/messages/en.json")).default;
        const dashboardMessages = enMessages.dashboard;
        const fallbackT = ((key: string, opts?: any) => {
            const keys = key.split(".");
            let val: any = dashboardMessages;
            for (const k of keys) val = val?.[k];
            return typeof val === "string" ? val : key;
        });
        t = fallbackT as any;
        t.rich = (key: string, opts?: any) => t(key, opts);
        t.stats = dashboardMessages.stats;
        t.quickActions = dashboardMessages.quickActions;
        t.sessions = dashboardMessages.sessions;
    }

    return (
        <div className="min-h-screen bg-[#0b141a] text-gray-100 font-sans">
            <SpyroApp />
        </div>
    );
}
