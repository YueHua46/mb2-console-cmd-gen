// src/components/CodeBlock.tsx
import { useToast } from '@/hooks/useToast';
import { copyToClipboard } from '@/lib/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '' }) => {
    const { toast } = useToast();
    const { t } = useTranslation("common");


    const handleCopy = () => {
        copyToClipboard(children as string);
        toast({
            title: t("copy_message"),
            description: t("copy_message"),
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
