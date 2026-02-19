"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
    className?: string;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error in dashboard component:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className={`p-6 rounded-xl border border-destructive/20 bg-destructive/5 text-destructive font-mono text-sm uppercase tracking-wider flex items-center justify-center ${this.props.className}`}>
                    Component failed to load
                </div>
            );
        }

        return this.props.children;
    }
}
