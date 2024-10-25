import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useTranslation } from "react-i18next";

export default function Feedback() {
    const { t } = useTranslation("common");
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t("feedback.title")}</CardTitle>
                <CardDescription>
                    {t("feedback.description")}
                </CardDescription>
            </CardHeader>

            <CardContent>

                <ul>
                    <li>email：<a href="mailto:2766274062@qq.com">2766274062@qq.com</a></li>
                    <li>QQ：<a href="https://wpa.qq.com/msgrd?v=3&uin=2766274062&site=qq&menu=yes">2766274062</a></li>
                    <li>TG：<a href="https://t.me/yuehua1450">@yuehua1450</a></li>
                </ul>
            </CardContent>
        </Card>
    )
}
