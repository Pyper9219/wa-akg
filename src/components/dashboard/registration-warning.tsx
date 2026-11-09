"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

interface RegistrationWarningProps {
    role?: string;
    registrationEnabled?: boolean;
}

export function RegistrationWarning({ role, registrationEnabled }: RegistrationWarningProps) {
    let t: any;
    try {
        t = useTranslations("settings");
    } catch {
        const fallbackT = (key: string) => {
            const fallback: Record<string, string> = {
                registrationWarningTitle: "Registration is open",
                registrationWarningDesc: "Anyone can create an account. You can disable this in Settings.",
                registrationWarningAction: "Go to Settings",
            };
            return fallback[key] || key;
        };
        t = fallbackT;
    }

    const [shown, setShown] = useState(false);

    useEffect(() => {
        if (shown) return;
        if (role === "SUPERADMIN" && registrationEnabled) {
            const timer = setTimeout(() => {
                toast(t("registrationWarningTitle"), {
                    description: t("registrationWarningDesc"),
                    icon: <ShieldAlert className="text-amber-500 w-5 h-5" />,
                    duration: 8000,
                    position: "top-center",
                    action: {
                        label: t("registrationWarningAction"),
                        onClick: () => window.location.href = "/dashboard/settings"
                    }
                });
                setShown(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [role, registrationEnabled, t, shown]);

    return null;
}
