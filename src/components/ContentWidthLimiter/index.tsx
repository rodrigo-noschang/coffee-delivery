import { ReactNode } from 'react';

import { ContentWidthLimiterContainer } from "./styles";

interface ContentWidthLimiterProps {
    children: ReactNode;
}

export function ContentWidthLimiter({ children }: ContentWidthLimiterProps) {
    return (
        <ContentWidthLimiterContainer>
            {children}
        </ContentWidthLimiterContainer>
    )
}