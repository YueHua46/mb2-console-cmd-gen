// src/pages/index.tsx
import CodeBlock from '@/components/code-block';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createLazyFileRoute } from '@tanstack/react-router';
import CommandGenerator from '@/components/command-generator';
import { useTranslation } from 'react-i18next';
export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    const { t } = useTranslation("common");
    return (
        <div className='flex flex-col gap-4 p-4'>
            {/* 前置准备卡片 */}
            <Card>
                <CardHeader>
                    <CardTitle className='text-xl'>
                        {t("preparation.pre_preparation")}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex flex-col gap-2'>
                            <span>{t("preparation.open_console")}</span>
                            <CodeBlock>Alt + ~</CodeBlock>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <span>{t("preparation.enable_cheat")}</span>
                            <CodeBlock>config.cheat_mode 1</CodeBlock>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <span>{t("preparation.disable_cheat")}</span>
                            <CodeBlock>config.cheat_mode 0</CodeBlock>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* 命令生成器卡片 */}
            <CommandGenerator />
        </div>
    );
}

export default Index;
