// src/pages/index.tsx
import CodeBlock from '@/components/code-block';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createLazyFileRoute } from '@tanstack/react-router';
import CommandGenerator from '@/components/command-generator';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div className='flex flex-col gap-4 p-4'>
            {/* 前置准备卡片 */}
            <Card>
                <CardHeader>
                    <CardTitle className='text-xl'>
                        前置准备
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex flex-col gap-2'>
                            <span>打开控制台的默认键是</span>
                            <CodeBlock>Alt + ~</CodeBlock>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <span>从控制台启用作弊模式</span>
                            <CodeBlock>config.cheat_mode 1</CodeBlock>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <span>从控制台禁用作弊模式</span>
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
