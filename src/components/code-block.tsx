// src/components/CodeBlock.tsx
import { useToast } from '@/hooks/useToast';
import { copyToClipboard } from '@/lib/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import React from 'react';

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '' }) => {
    const { toast } = useToast();

    const handleCopy = () => {
        copyToClipboard(children as string);
        toast({
            title: "已将指令复制到剪贴板",
            description: "已将指令复制到剪贴板",
        });
    };

    return (
        <pre className={`bg-slate-700 text-ivory p-4 pr-12 rounded-lg shadow-md relative ${className}`}>
            <code className="font-mono text-lg text-ivory whitespace-pre-wrap break-all">
                {children}
            </code>
            <CopyIcon onClick={handleCopy} width={24} height={24} className="absolute top-4 right-4 cursor-pointer" />
        </pre>
    );
};

export default CodeBlock;
