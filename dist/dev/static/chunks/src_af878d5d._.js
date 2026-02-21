(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript) <export * as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Root, {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Portal, {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Trigger, {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Content, {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Group, {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Item, {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].CheckboxItem, {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].RadioGroup, {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].RadioItem, {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Label, {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Separator, {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].Sub, {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].SubTrigger, {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__DropdownMenu$3e$__["DropdownMenu"].SubContent, {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-primary/35 focus-visible:border-primary/40 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border border-white/12 bg-background/80 shadow-xs hover:bg-accent/70 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/benchmarks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "benchmarks",
    ()=>benchmarks
]);
const DEFAULT_BENCHMARK_LINK = "https://artificialanalysis.ai/evaluations";
const BENCHMARK_LINK_OVERRIDES = {
    "mmlu": "https://arxiv.org/abs/2009.03300",
    "mmlu-pro": "https://arxiv.org/abs/2406.01574",
    "math": "https://arxiv.org/abs/2103.03874",
    "human-eval": "https://arxiv.org/abs/2107.03374",
    "swe-bench-verified": "https://www.swebench.com/",
    "mmmu": "https://mmmu-benchmark.github.io/",
    "mmmu-pro": "https://mmmu-benchmark.github.io/",
    "mmmu-val": "https://mmmu-benchmark.github.io/",
    "mmmu-vision": "https://mmmu-benchmark.github.io/",
    "mmmlu": "https://arxiv.org/abs/2402.03300",
    "mathvista": "https://mathvista.github.io/",
    "mathvista-mini": "https://mathvista.github.io/",
    "livebench": "https://livebench.ai/#/",
    "livecodebench-v6": "https://livecodebench.github.io/",
    "livecodebench-pro": "https://livecodebenchpro.com/",
    "bigcodebench": "https://github.com/bigcode-project/bigcodebench",
    "gsm8k": "https://github.com/openai/grade-school-math",
    "aime": "https://artofproblemsolving.com/wiki/index.php/AIME",
    "aime-2025": "https://artofproblemsolving.com/wiki/index.php/AIME",
    "aime-2026": "https://artofproblemsolving.com/wiki/index.php/AIME",
    "gpqa-diamond": "https://arxiv.org/abs/2311.12022",
    "arc-agi-1": "https://arcprize.org/",
    "arc-agi-2": "https://arcprize.org/",
    "arc-agi-1-image": "https://arcprize.org/",
    "arc-agi-2-image": "https://arcprize.org/",
    "hle": "https://agi.safe.ai/",
    "hle-full": "https://agi.safe.ai/",
    "hle-full-tools": "https://agi.safe.ai/",
    "hle-text": "https://agi.safe.ai/",
    "hle-verified": "https://agi.safe.ai/",
    "hle-vl": "https://agi.safe.ai/",
    "codeforces": "https://codeforces.com/",
    "lmarena-elo": "https://chat.lmsys.org/?leaderboard",
    "webarena": "https://webarena.dev/",
    "agentbench": "https://github.com/THUDM/AgentBench",
    "tau-bench": "https://github.com/sierra-research/tau2-bench",
    "tau-bench-retail": "https://taubench.com/",
    "tau-bench-telecom": "https://github.com/sierra-research/tau2-bench",
    "docvqa": "https://rrc.cvc.uab.es/?ch=17",
    "ocrbench": "https://ocrbench.github.io/",
    "ocrbench-v2": "https://ocrbench.github.io/",
    "videomme": "https://video-mme.github.io/",
    "terminal-bench": "https://www.tbench.ai/leaderboard/terminal-bench/2.0",
    "terminal-bench-hard": "https://www.tbench.ai/leaderboard/terminal-bench/2.0",
    "osworld-verified": "https://os-world.github.io/",
    "swe-bench-pro": "https://www.swebench.com/",
    "lcr": "https://artificialanalysis.ai/evaluations#lcr",
    "ifbench": "https://artificialanalysis.ai/evaluations#ifbench",
    "aa-omniscience": "https://artificialanalysis.ai/evaluations#omniscience",
    "critpt": "https://arxiv.org/abs/2501.00663",
    "scicode": "https://github.com/scicode-bench/scicode",
    "browsecomp": "https://github.com/google-research/browsecomp",
    "screenspot-pro": "https://github.com/octopus-tools/screenspot-pro",
    "charxiv-reasoning": "https://arxiv.org/abs/2406.18521",
    "facts-benchmark": "https://github.com/google-deepmind/facts-benchmark",
    "mcp-atlas": "https://github.com/modelcontextprotocol/mcp-atlas",
    "toolathlon": "https://github.com/toolathlon/toolathlon"
};
function getBenchmarkLink(benchmark) {
    return benchmark.link ?? BENCHMARK_LINK_OVERRIDES[benchmark.id] ?? `${DEFAULT_BENCHMARK_LINK}#${benchmark.id}`;
}
const rawBenchmarks = [
    {
        id: "mmlu",
        name: "MMLU (5-shot)",
        category: "Knowledge",
        description: "Massive Multitask Language Understanding covers 57 subjects across STEM, the humanities, social sciences, and more.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu",
        paperUrl: "https://arxiv.org/abs/2009.03300"
    },
    {
        id: "math",
        name: "MATH (CoT)",
        category: "Math",
        description: "Challenging competition mathematics problems (AIME/IMO level).",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://paperswithcode.com/sota/math-word-problem-solving-on-math",
        paperUrl: "https://arxiv.org/abs/2103.03874"
    },
    {
        id: "human-eval",
        name: "HumanEval",
        category: "Coding",
        description: "Functional correctness of synthesized programs from docstrings.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://paperswithcode.com/sota/code-generation-on-humaneval",
        paperUrl: "https://arxiv.org/abs/2107.03374"
    },
    {
        id: "swe-bench-verified",
        name: "SWE-bench Verified",
        category: "Coding",
        description: "Resolving real-world GitHub issues. Verified subset ensures solvable issues.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://www.swebench.com/",
        paperUrl: "https://arxiv.org/abs/2310.06770"
    },
    {
        id: "mmmu",
        name: "MMMU (Multimodal)",
        category: "Multimodal",
        description: "Multi-discipline Multimodal Understanding and Reasoning.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://mmmu-benchmark.github.io/",
        paperUrl: "https://arxiv.org/abs/2311.16502"
    },
    {
        id: "livebench",
        name: "LiveBench",
        category: "Reasoning",
        description: "Contamination-free, continuously updated reasoning benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://livebench.ai/#/",
        paperUrl: "https://arxiv.org/abs/2406.19314"
    },
    {
        id: "bigcodebench",
        name: "BigCodeBench",
        category: "Coding",
        description: "Next-generation HumanEval with more diverse library calls and complex tasks.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://github.com/bigcode-project/bigcodebench",
        paperUrl: "https://arxiv.org/abs/2406.15877"
    },
    {
        id: "gsm8k",
        name: "GSM8K",
        category: "Math",
        description: "Grade school math word problems requiring multi-step reasoning.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://github.com/openai/grade-school-math",
        paperUrl: "https://arxiv.org/abs/2110.14168"
    },
    {
        id: "aime",
        name: "AIME 2024/25",
        category: "Math",
        description: "American Invitational Mathematics Examination. Competition-level math.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "lmarena-elo",
        name: "LMArena ELO",
        category: "Real-world",
        description: "Chatbot Arena ELO score. Crowd-sourced human preference ranking.",
        maxScore: 1700,
        minScore: 1000,
        higherIsBetter: true,
        normalization: "elo",
        unit: "ELO",
        link: "https://chat.lmsys.org/?leaderboard"
    },
    {
        id: "aa-intelligence-index",
        name: "AA Intelligence Index",
        category: "Real-world",
        description: "Artificial Analysis aggregate intelligence index.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "agentbench",
        name: "AgentBench",
        category: "Agent",
        description: "Comprehensive framework to evaluate LLMs as agents across diverse environments.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://github.com/THUDM/AgentBench",
        paperUrl: "https://arxiv.org/abs/2308.03688"
    },
    // --- SCIENCE ---
    {
        id: "mmlu-pro",
        name: "MMLU-Pro",
        category: "Science",
        description: "A more robust and harder version of MMLU, focusing on complex reasoning and STEM subjects.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://huggingface.co/spaces/TIGER-Lab/MMLU-Pro",
        paperUrl: "https://arxiv.org/abs/2406.01574"
    },
    {
        id: "hle",
        name: "HLE",
        category: "Science",
        description: "Humanity's Last Exam - Hard reasoning benchmark without tools.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://agi.safe.ai/",
        paperUrl: "https://arxiv.org/abs/2501.14249"
    },
    {
        id: "hle-full",
        name: "HLE-Full",
        category: "Science",
        description: "Humanity's Last Exam full evaluation without tools.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://agi.safe.ai/",
        paperUrl: "https://arxiv.org/abs/2501.14249"
    },
    {
        id: "hle-full-tools",
        name: "HLE-Full (w/ tools)",
        category: "Science",
        description: "Humanity's Last Exam full evaluation with tool access enabled.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://agi.safe.ai/",
        paperUrl: "https://arxiv.org/abs/2501.14249"
    },
    {
        id: "critpt",
        name: "CritPt",
        category: "Science",
        description: "Complex Research using Integrated Thinking - Physics Test. Research-level physics reasoning.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://arxiv.org/abs/2501.00663"
    },
    {
        id: "simpleqa",
        name: "SimpleQA",
        category: "Science",
        description: "Open-domain factuality benchmark focusing on short, verifiable answers.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "simpleqa-verified",
        name: "SimpleQA Verified",
        category: "Knowledge",
        description: "Verified subset of SimpleQA for parametric knowledge evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "healthbench",
        name: "HealthBench",
        category: "Science",
        description: "Medical knowledge and diagnostic reasoning evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "supergpqa",
        name: "SuperGPQA",
        category: "Science",
        description: "Extremely difficult expert-level science questions.",
        maxScore: 100,
        higherIsBetter: true
    },
    // --- MATH ---
    {
        id: "aime-2026",
        name: "AIME 2026",
        category: "Math",
        description: "Future prediction of AIME performance levels.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "aa-math-index",
        name: "AA Math Index",
        category: "Math",
        description: "Artificial Analysis aggregate math capability index.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "hmmt-feb-2025",
        name: "HMMT Feb 2025",
        category: "Math",
        description: "Harvard-MIT Mathematics Tournament - High difficulty competition math.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "math-500",
        name: "MATH-500",
        category: "Math",
        description: "500-problem math benchmark for broad quantitative reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "imo-answerbench",
        name: "IMO-AnswerBench",
        category: "Math",
        description: "International Mathematical Olympiad style answer-only benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "matharena-apex",
        name: "MathArenaApex",
        category: "Math",
        description: "Competitive math arena for top-tier reasoning models.",
        maxScore: 100,
        higherIsBetter: true
    },
    // --- CODE ---
    {
        id: "codeforces",
        name: "Codeforces",
        category: "Coding",
        description: "Competitive programming rating based on problem solving.",
        maxScore: 4000,
        higherIsBetter: true,
        normalization: "max",
        unit: "rating"
    },
    {
        id: "livecodebench-v6",
        name: "LiveCodeBench v6",
        category: "Coding",
        description: "Contamination-free coding benchmark using recent problems.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://livecodebench.github.io/",
        paperUrl: "https://arxiv.org/abs/2403.07974"
    },
    {
        id: "livecodebench-pro",
        name: "LiveCodeBench Pro",
        category: "Coding",
        description: "Competitive programming problems from Codeforces, ICPC, and IOI with Elo rating.",
        maxScore: 4000,
        higherIsBetter: true,
        normalization: "max",
        unit: "Elo"
    },
    {
        id: "aa-coding-index",
        name: "AA Coding Index",
        category: "Coding",
        description: "Artificial Analysis aggregate coding capability index.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "paperbench-codedev",
        name: "PaperBench (CodeDev)",
        category: "Coding",
        description: "Research-grade coding and software development tasks.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "cybergym",
        name: "CyberGym",
        category: "Coding",
        description: "Cybersecurity-flavored coding benchmark in simulated environments.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "ojbench-cpp",
        name: "OJBench (cpp)",
        category: "Coding",
        description: "Online-judge competitive coding benchmark focused on C++ tasks.",
        maxScore: 100,
        higherIsBetter: true
    },
    // --- STEM ---
    {
        id: "gpqa-diamond",
        name: "GPQA Diamond",
        category: "STEM",
        description: "Graduate-Level Google-Proof Q&A Benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://gpqa-benchmark.github.io/",
        paperUrl: "https://arxiv.org/abs/2311.12022"
    },
    {
        id: "phybench",
        name: "Phybench",
        category: "STEM",
        description: "Physics reasoning and problem solving benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    // --- REASONING ---
    {
        id: "arc-agi-1",
        name: "ARC-AGI-1",
        category: "Reasoning",
        description: "Abstraction and Reasoning Corpus - Level 1.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://arcprize.org/",
        paperUrl: "https://arxiv.org/abs/1911.01547"
    },
    // --- LONG CONTEXT ---
    {
        id: "mrcr-v2",
        name: "MRCR v2",
        category: "Long Context",
        description: "Multi-Round Context Retrieval - 8-needle test.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "longbench-v2",
        name: "LongBench v2",
        category: "Long Context",
        description: "Comprehensive long-context understanding (128k).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "lcr",
        name: "AA-LCR",
        category: "Long Context",
        description: "Artificial Analysis Long Context Reasoning benchmark. Evaluates reasoning over long contexts.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://artificialanalysis.ai/evaluations#lcr"
    },
    // --- MULTILINGUAL ---
    {
        id: "mmmlu",
        name: "MMMLU",
        category: "Multilingual",
        description: "Massive Multilingual Language Understanding.",
        maxScore: 100,
        higherIsBetter: true,
        paperUrl: "https://arxiv.org/abs/2402.03300"
    },
    {
        id: "ifeval",
        name: "IFEval",
        category: "Instruction Following",
        description: "Instruction Following Evaluation for Large Language Models. Measures ability to follow strict formatting and constraint requirements.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://huggingface.co/spaces/yejinxie/IFEval",
        paperUrl: "https://arxiv.org/abs/2311.07911"
    },
    // --- INSTRUCTION FOLLOWING ---
    {
        id: "ifeval-inverse",
        name: "Inverse IFEval",
        category: "Instruction Following",
        description: "Reverse instruction following evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "ifbench",
        name: "IFBench",
        category: "Instruction Following",
        description: "Artificial Analysis IFBench. Evaluates precise instruction following with constraints.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://artificialanalysis.ai/evaluations#ifbench"
    },
    {
        id: "verified-advancedif",
        name: "Verified AdvancedIF",
        category: "Instruction Following",
        description: "Advanced instruction-following benchmark with verified grading.",
        maxScore: 100,
        higherIsBetter: true
    },
    // --- HALLUCINATION ---
    {
        id: "longfact-concepts",
        name: "LongFact-Concepts",
        category: "Hallucination",
        description: "Factuality in long-form conceptual generations.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "aa-omniscience",
        name: "AA-Omniscience",
        category: "Hallucination",
        description: "Evaluates model omniscience and factual reliability across diverse domains.",
        maxScore: 100,
        minScore: -100,
        higherIsBetter: true,
        link: "https://artificialanalysis.ai/evaluations#omniscience"
    },
    {
        id: "aime-2025",
        name: "AIME 2025",
        category: "Math",
        description: "American Invitational Mathematics Examination 2025 problems.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "arc-agi-2",
        name: "ARC-AGI-2",
        category: "Reasoning",
        description: "Abstraction and Reasoning Corpus - Level 2 (Extreme difficulty).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "factscore",
        name: "FactScore",
        category: "Hallucination",
        description: "Precision of fine-grained facts in long-form biographies.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "superchem",
        name: "Superchem",
        category: "STEM",
        description: "Expert-level chemistry knowledge and reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "korbench",
        name: "KORBench",
        category: "Reasoning",
        description: "Korean reasoning and language understanding benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "graphwalks-bfs",
        name: "Graphwalks Bfs",
        category: "Long Context",
        description: "Traversal-based long context reasoning using BFS (128k).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "global-piqa",
        name: "Global PIQA",
        category: "Multilingual",
        description: "Physical Interaction QA across multiple languages and cultures.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "multichallenge",
        name: "MultiChallenge",
        category: "Instruction Following",
        description: "Complex, multi-constraint instruction following tasks.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "longfact-objects",
        name: "LongFact-Objects",
        category: "Hallucination",
        description: "Factuality in long-form generations about objects.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "putnam-200",
        name: "Putnam-200",
        category: "Math",
        description: "William Lowell Putnam Mathematical Competition problems - top 200 level difficulty.",
        maxScore: 100,
        higherIsBetter: true
    },
    // --- VISION ---
    {
        id: "mathvista",
        name: "MathVista",
        category: "Vision",
        description: "Mathematical reasoning in visual contexts.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://mathvista.github.io/",
        paperUrl: "https://arxiv.org/abs/2310.02255"
    },
    {
        id: "mathvista-mini",
        name: "MathVista (mini)",
        category: "Vision",
        description: "Compact MathVista split for faster multimodal reasoning checks.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mathvision",
        name: "MathVision",
        category: "Vision",
        description: "Comprehensive mathematical vision benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmmu-vision",
        name: "MMMU",
        category: "Vision",
        description: "Massive Multi-discipline Multimodal Understanding and Reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "logicvista",
        name: "LogicVista",
        category: "Vision",
        description: "Logical reasoning in visual puzzles and diagrams.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "blink",
        name: "BLINK",
        category: "Vision",
        description: "Spatial and perception benchmark for multimodal models.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmvp",
        name: "MMVP",
        category: "Vision",
        description: "Multimodal visual perception benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "chartqapro",
        name: "ChartQA Pro",
        category: "Vision",
        description: "Expert-level chart understanding and question answering.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "docvqa",
        name: "DocVQA",
        category: "Vision",
        description: "Document visual question answering on scanned and digital documents.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://rrc.cvc.uab.es/?ch=17",
        paperUrl: "https://arxiv.org/abs/2007.00398"
    },
    {
        id: "ocrbench-v2",
        name: "OCRBench v2",
        category: "Vision",
        description: "Next-gen optical character recognition and document understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "ocrbench",
        name: "OCRBench",
        category: "Vision",
        description: "Optical character recognition and document understanding benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        link: "https://ocrbench.github.io/",
        paperUrl: "https://arxiv.org/abs/2312.16151"
    },
    {
        id: "dynamath",
        name: "DynaMath",
        category: "Vision",
        description: "Dynamic mathematical reasoning in visual contexts.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mathkangaroo",
        name: "MathKangaroo",
        category: "Vision",
        description: "Mathematical competition problems with visual elements.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mathcanvas",
        name: "MathCanvas",
        category: "Vision",
        description: "Multi-step mathematical reasoning on a canvas.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmmu-pro",
        name: "MMMU-Pro",
        category: "Vision",
        description: "Professional level MMMU expansion.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmmu-val",
        name: "MMMU (val)",
        category: "Vision",
        description: "Validation split of MMMU for multimodal understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "emma",
        name: "EMMA",
        category: "Vision",
        description: "Expert-level Multimodal Mathematics Analysis.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "sfe",
        name: "SFE",
        category: "Vision",
        description: "Scientific Figure Evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "hipho",
        name: "HiPhO",
        category: "Vision",
        description: "High-level Physics Olympiad (Vision).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "xlrs-bench",
        name: "XLRS-Bench",
        category: "Vision",
        description: "Cross-domain Logical Reasoning and Spatial benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "phyx",
        name: "PhyX",
        category: "Vision",
        description: "Physics reasoning with open-ended visual questions.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "vpct",
        name: "VPCT",
        category: "Vision",
        description: "Visual Perception and Coding Tasks.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "zerobench-main",
        name: "ZeroBench (main)",
        category: "Vision",
        description: "Zero-shot visual reasoning benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "zerobench-sub",
        name: "ZeroBench (sub)",
        category: "Vision",
        description: "Zero-shot visual reasoning sub-tasks.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "zerobench",
        name: "ZeroBench",
        category: "Vision",
        description: "Aggregate ZeroBench score across the full task set.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "zerobench-tools",
        name: "ZeroBench (w/ tools)",
        category: "Vision",
        description: "ZeroBench score when tool use is allowed.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "arc-agi-1-image",
        name: "ArcAGI1-Image",
        category: "Vision",
        description: "ARC-AGI Level 1 tasks in image format.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "arc-agi-2-image",
        name: "ArcAGI2-Image",
        category: "Vision",
        description: "ARC-AGI Level 2 tasks in image format.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "visulogic",
        name: "VisuLogic",
        category: "Vision",
        description: "Visual logic and sequence reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "vlms-are-biased",
        name: "VLMsAreBiased",
        category: "Vision",
        description: "Evaluating bias in Vision-Language Models.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "vlms-are-blind",
        name: "VLMsAreBlind",
        category: "Vision",
        description: "Evaluating perception failures in VLMs.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "visfactor",
        name: "VisFactor",
        category: "Vision",
        description: "Visual factor identification and reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "realworldqa",
        name: "RealWorldQA",
        category: "Vision",
        description: "Real-world visual question answering.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "babyvision",
        name: "BabyVision",
        category: "Vision",
        description: "Early-stage visual development benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "hallusionbench",
        name: "HallusionBench",
        category: "Vision",
        description: "Visual hallucination and factuality benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mme-cc",
        name: "MME-CC",
        category: "Vision",
        description: "Multimodal Evaluation (Cognitive Capacity).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmstar",
        name: "MMStar",
        category: "Vision",
        description: "Elite multimodal model evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "muirbench",
        name: "MUIRBench",
        category: "Vision",
        description: "Multimodal Understanding and Interaction Benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mtvqa",
        name: "MTVQA",
        category: "Vision",
        description: "Multilingual Text-centric Visual QA.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "worldvqa",
        name: "WorldVQA",
        category: "Vision",
        description: "Global visual knowledge and reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "vibeeval",
        name: "VibeEval",
        category: "Vision",
        description: "Subjective and intuitive visual quality evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "viverbench",
        name: "ViVerBench",
        category: "Vision",
        description: "Visual Verification and reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "countbench",
        name: "CountBench",
        category: "Vision",
        description: "Visual object counting and identification.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "fsc-147",
        name: "FSC-147",
        category: "Vision",
        description: "Few-shot counting benchmark (Lower is better handled in normalization).",
        maxScore: 100,
        higherIsBetter: false,
        normalization: "inverse",
        unit: "error"
    },
    {
        id: "point-bench",
        name: "Point-Bench",
        category: "Vision",
        description: "Visual pointing and spatial grounding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmsibench",
        name: "MMSIBench",
        category: "Vision",
        description: "Multimodal Spatial Interaction Benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "treebench",
        name: "TreeBench",
        category: "Vision",
        description: "Hierarchical visual reasoning tasks.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "refspatialbench",
        name: "RefSpatialBench",
        category: "Vision",
        description: "Referential spatial reasoning evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "da-2k",
        name: "DA-2K",
        category: "Vision",
        description: "Document Analysis and reasoning (2k).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "all-angles",
        name: "All-Angles",
        category: "Vision",
        description: "Multi-perspective visual understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "erqa",
        name: "ERQA",
        category: "Vision",
        description: "Environment Reasoning and Question Answering.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "omnidocbench",
        name: "OmniDocBench",
        category: "Vision",
        description: "Universal document understanding benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "omnidocbench-15",
        name: "OmniDocBench 1.5",
        category: "Vision",
        description: "OCR benchmark measuring edit distance (lower is better).",
        maxScore: 1,
        minScore: 0,
        higherIsBetter: false,
        unit: "edit distance"
    },
    {
        id: "screenspot-pro",
        name: "ScreenSpot-Pro",
        category: "Vision",
        description: "Screen understanding benchmark for GUI interaction.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "infovqa-test",
        name: "InfoVQA (test)",
        category: "Vision",
        description: "Information-seeking visual question answering on the test split.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "charxiv-dq",
        name: "CharXiv-DQ",
        category: "Vision",
        description: "Chart-based reasoning from arXiv papers (Data QA).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "charxiv-rq",
        name: "CharXiv-RQ",
        category: "Vision",
        description: "Chart-based reasoning from arXiv papers (Reasoning QA).",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "charxiv-reasoning",
        name: "CharXiv Reasoning",
        category: "Vision",
        description: "Information synthesis from complex charts.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "dude",
        name: "DUDE",
        category: "Vision",
        description: "Document Understanding and Dialogue Evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmlongbench",
        name: "MMLongBench",
        category: "Vision",
        description: "Multimodal Long context benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "longdocurl",
        name: "LongDocURL",
        category: "Vision",
        description: "Long document understanding with URLs.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mmlongbench-doc",
        name: "MMLongBench-Doc",
        category: "Vision",
        description: "Multimodal Long context document evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    // --- VIDEO (Expansion) ---
    {
        id: "mmvu",
        name: "MMVU",
        category: "Video",
        description: "Multimodal Video Understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "videosimpleqa",
        name: "VideoSimpleQA",
        category: "Video",
        description: "Verifiable question answering for short video clips.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "videoreasonbench",
        name: "VideoReasonBench",
        category: "Video",
        description: "Complex reasoning tasks in video content.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "morse-500",
        name: "Morse-500",
        category: "Video",
        description: "Sequence reasoning and motion understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "videoholmes",
        name: "VideoHolmes",
        category: "Video",
        description: "Deep diagnostic video understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "minerva",
        name: "Minerva",
        category: "Video",
        description: "Long-form video reasoning and knowledge retrieval.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "contphy",
        name: "ContPhy",
        category: "Video",
        description: "Continuous Physics reasoning in video.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "tempcompass",
        name: "TempCompass",
        category: "Video",
        description: "Temporal orientation and perception in video.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "egotempo",
        name: "EgoTempo",
        category: "Video",
        description: "First-person perspective temporal reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "motionbench",
        name: "MotionBench",
        category: "Video",
        description: "Comprehensive motion perception evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "tomato",
        name: "TOMATO",
        category: "Video",
        description: "Temporal Object-centric Multimodal Analysis.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "cgbench",
        name: "CGBench",
        category: "Video",
        description: "Contextual Grounding in long videos.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "longvideobench",
        name: "LongVideoBench",
        category: "Video",
        description: "Understanding extremely long-form video content.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "videoeval-pro",
        name: "VideoEval-Pro",
        category: "Video",
        description: "Professional level video quality and content evaluation.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "lvbench",
        name: "LVBench",
        category: "Video",
        description: "Large-scale Video Benchmark.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "crossvid",
        name: "CrossVid",
        category: "Video",
        description: "Cross-video temporal and relational reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "livesports-3k",
        name: "LiveSports-3K",
        category: "Video",
        description: "Live sports broadcast understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "ovobench",
        name: "OVOBench",
        category: "Video",
        description: "Object-Video-Object relational reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "odvbench",
        name: "ODVBench",
        category: "Video",
        description: "Open-Domain Video understanding.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "vispeak",
        name: "ViSpeak",
        category: "Video",
        description: "Video-to-speech and dialogue reasoning.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "frontiersci-olympiad",
        name: "FrontierSci-olympiad",
        category: "STEM",
        description: "Scientific Olympiad level problems.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    // --- AGENTIC ---
    {
        id: "terminal-bench",
        name: "Terminal-Bench 2.0",
        category: "Agentic",
        description: "Agent performance in realistic terminal workflows (v2.0 leaderboard).",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "terminal-bench-hard",
        name: "Terminal-Bench Hard",
        category: "Agentic",
        description: "Hard split of Terminal-Bench focused on tougher terminal workflows.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "osworld-verified",
        name: "OSWorld-Verified",
        category: "Agentic",
        description: "Verified desktop computer-use benchmark for end-to-end task completion.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "webarena",
        name: "WebArena",
        category: "Agentic",
        description: "Browser-based autonomous task execution benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%",
        link: "https://webarena.dev/",
        paperUrl: "https://arxiv.org/abs/2307.13854"
    },
    {
        id: "swe-lancer",
        name: "SWE-Lancer",
        category: "Agentic",
        description: "Software engineering task completion in multi-step coding workflows.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "multi-swe-bench",
        name: "Multi-SWE-bench",
        category: "Agentic",
        description: "Multi-repository software engineering benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "swe-bench-pro",
        name: "SWE-bench Pro",
        category: "Agentic",
        description: "Higher-difficulty SWE-bench subset for frontier coding agents.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "swe-multilingual",
        name: "SWE Multilingual",
        category: "Agentic",
        description: "Software engineering performance across multilingual codebases.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "swe-evo",
        name: "SWE-Evo",
        category: "Agentic",
        description: "Evolutionary coding benchmark focused on long-horizon bug fixing.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "aider-polyglot",
        name: "Aider Polyglot",
        category: "Agentic",
        description: "Multi-language coding agent benchmark with editor-in-the-loop tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "artifactsbench",
        name: "ArtifactsBench",
        category: "Agentic",
        description: "Agent ability to produce complete, runnable software artifacts.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "codesimpleqa",
        name: "CodeSimpleQA",
        category: "Agentic",
        description: "Short-form coding QA with executable correctness checks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "spreadsheetbench-verified",
        name: "SpreadsheetBench Verified",
        category: "Agentic",
        description: "Verified spreadsheet manipulation and reasoning tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "browsecomp",
        name: "BrowseComp",
        category: "Agentic",
        description: "Web browsing + synthesis benchmark for research agents.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "browsecomp-ctx-manage",
        name: "BrowseComp (ctx manage)",
        category: "Agentic",
        description: "BrowseComp variant with explicit context-window management.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "browsecomp-agent-swarm",
        name: "BrowseComp (Agent Swarm)",
        category: "Agentic",
        description: "Multi-agent swarm variant of BrowseComp.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "browsecomp-zh",
        name: "BrowseComp-ZH",
        category: "Agentic",
        description: "Chinese-language browsing and synthesis benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "hle-text",
        name: "HLE-Text",
        category: "Agentic",
        description: "Text-only variant of Humanity's Last Exam under agentic settings.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "hle-verified",
        name: "HLE-Verified",
        category: "Agentic",
        description: "Verified subset of Humanity's Last Exam for reproducible evaluation.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "widesearch",
        name: "WideSearch",
        category: "Agentic",
        description: "Broad retrieval and synthesis benchmark across many sources.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "widesearch-agent-swarm",
        name: "WideSearch (Agent Swarm)",
        category: "Agentic",
        description: "Multi-agent swarm variant of WideSearch.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "finsearchcomp",
        name: "FinSearchComp",
        category: "Agentic",
        description: "Finance-focused search and evidence-grounded answering benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "finsearchcomp-t2-t3",
        name: "FinSearchComp T2&T3",
        category: "Agentic",
        description: "Tier 2 and Tier 3 slices of FinSearchComp.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "vending-bench-2",
        name: "Vending-Bench 2",
        category: "Agentic",
        description: "Long-horizon business simulation benchmark (final account balance).",
        maxScore: 10000,
        minScore: 0,
        higherIsBetter: true,
        normalization: "max",
        unit: "USD"
    },
    {
        id: "facts-benchmark",
        name: "FACTS Benchmark Suite",
        category: "Agentic",
        description: "Factuality benchmark across grounding, parametric, search, and multimodal.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "mcp-atlas",
        name: "MCP Atlas",
        category: "Agentic",
        description: "Multi-step workflows using Model Context Protocol.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "toolathlon",
        name: "Toolathlon",
        category: "Agentic",
        description: "Long horizon real-world software tasks.",
        maxScore: 100,
        higherIsBetter: true
    },
    {
        id: "deepsearchqa",
        name: "DeepSearchQA",
        category: "Agentic",
        description: "Deep multi-hop search QA for long-horizon agents.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "seal-0",
        name: "SEAL-0",
        category: "Agentic",
        description: "Strategic environment-agent loop benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "gdpval-aa",
        name: "GDPVal-AA",
        category: "Agentic",
        description: "Artificial Analysis GDPVal benchmark for knowledge-work quality.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tau-bench",
        name: "TAU-Bench",
        category: "Agentic",
        description: "Tool-use and API orchestration benchmark for assistants.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tau-bench-retail",
        name: "TAU-Bench Retail",
        category: "Agentic",
        description: "Retail-domain tool-use and workflow benchmark from τ²-bench.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tau-bench-telecom",
        name: "TAU-Bench Telecom",
        category: "Agentic",
        description: "Telecom-domain tool-use and workflow benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "mcp-mark",
        name: "MCP-Mark",
        category: "Agentic",
        description: "Model Context Protocol interoperability benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "bfcl-v4",
        name: "BFCL v4",
        category: "Agentic",
        description: "Function calling reliability benchmark (v4).",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "vitabench",
        name: "VitaBench",
        category: "Agentic",
        description: "Virtual task assistant benchmark across practical workflows.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "deepconsult",
        name: "DeepConsult",
        category: "Agentic",
        description: "Consulting-style multi-step reasoning and recommendation benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "deepresearchbench",
        name: "DeepResearchBench",
        category: "Agentic",
        description: "Long-horizon research task benchmark with citation requirements.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "researchrubrics",
        name: "ResearchRubrics",
        category: "Agentic",
        description: "Rubric-based evaluation of research quality and rigor.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "minedojo-verified",
        name: "MineDojo Verified",
        category: "Agentic",
        description: "Verified embodied-agent benchmark in Minecraft-style tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "mm-browsecomp",
        name: "MM-BrowseComp",
        category: "Agentic",
        description: "Multimodal browse + synthesize benchmark for web agents.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "hle-vl",
        name: "HLE-VL",
        category: "Agentic",
        description: "Vision-language variant of Humanity's Last Exam under agentic settings.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    // --- ADVANCED TASKS ---
    {
        id: "scicode",
        name: "SciCode",
        category: "Advanced Tasks",
        description: "Scientific programming benchmark for code synthesis and correctness.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "frontiersci-research",
        name: "FrontierSci Research",
        category: "Advanced Tasks",
        description: "Open-ended scientific research benchmark with expert-level questions.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "biobench",
        name: "BioBench",
        category: "Advanced Tasks",
        description: "Biology and life-science benchmark requiring deep domain reasoning.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "ainstein-bench",
        name: "AInstein-Bench",
        category: "Advanced Tasks",
        description: "Hard scientific reasoning benchmark inspired by olympiad-level tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "vibe-coding",
        name: "Vibe Coding",
        category: "Advanced Tasks",
        description: "High-level coding outcome quality benchmark for agent-driven development.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "nl2repo-bench",
        name: "NL2Repo-Bench",
        category: "Advanced Tasks",
        description: "Natural language to repository-wide code edits benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "nl2repo-pass1",
        name: "NL2Repo Pass@1",
        category: "Advanced Tasks",
        description: "Pass@1 metric for repository-scale code modification tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "cl-bench",
        name: "CL-Bench",
        category: "Advanced Tasks",
        description: "Complex language benchmark covering difficult enterprise workflows.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tob-complex",
        name: "TOB Complex",
        category: "Advanced Tasks",
        description: "Task-oriented benchmark for complex instruction execution.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tob-reference",
        name: "TOB Reference",
        category: "Advanced Tasks",
        description: "Reference-heavy task-oriented benchmark requiring retrieval fidelity.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "healthbench-hard",
        name: "HealthBench Hard",
        category: "Advanced Tasks",
        description: "Hard-split medical reasoning benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "gdpval-diamond",
        name: "GDPVal Diamond",
        category: "Advanced Tasks",
        description: "Diamond subset for difficult planning and valuation tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "xpert-bench",
        name: "Xpert-Bench",
        category: "Advanced Tasks",
        description: "Expert-level evaluation benchmark across specialist domains.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tob-k12",
        name: "TOB K12",
        category: "Advanced Tasks",
        description: "Task-oriented benchmark for K12 educational tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tob-compositional",
        name: "TOB Compositional",
        category: "Advanced Tasks",
        description: "Compositional instruction-following benchmark with chained constraints.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tob-classification",
        name: "TOB Classification",
        category: "Advanced Tasks",
        description: "Classification-focused track of task-oriented benchmark suite.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tob-extraction",
        name: "TOB Extraction",
        category: "Advanced Tasks",
        description: "Extraction-focused benchmark for structured information tasks.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "world-travel-vlm",
        name: "World-Travel VLM",
        category: "Advanced Tasks",
        description: "Vision-language travel-planning and grounded reasoning benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "world-travel-text",
        name: "World-Travel Text",
        category: "Advanced Tasks",
        description: "Text-only travel-planning and itinerary reasoning benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    // --- VISION / VIDEO SUPPLEMENTS ---
    {
        id: "simplevqa",
        name: "SimpleVQA",
        category: "Vision",
        description: "Short-form visual question answering with verifiable responses.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "videommmu",
        name: "VideoMMMU",
        category: "Video",
        description: "Video variant of MMMU for multimodal understanding and reasoning.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "videomme",
        name: "VideoMME",
        category: "Video",
        description: "Video multimodal evaluation benchmark for perception and reasoning.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "tvbench",
        name: "TVBench",
        category: "Video",
        description: "Television/video narrative understanding benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    },
    {
        id: "ovbench",
        name: "OVBench",
        category: "Video",
        description: "Open-world video understanding benchmark.",
        maxScore: 100,
        higherIsBetter: true,
        normalization: "max",
        unit: "%"
    }
];
const benchmarks = rawBenchmarks.map((benchmark)=>({
        ...benchmark,
        normalization: benchmark.normalization ?? (benchmark.id === "lmarena-elo" ? "elo" : benchmark.higherIsBetter ? "max" : "inverse"),
        unit: benchmark.unit ?? (benchmark.id === "lmarena-elo" ? "ELO" : "%"),
        link: getBenchmarkLink(benchmark)
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/domains.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allDomains",
    ()=>allDomains,
    "domainCategories",
    ()=>domainCategories,
    "domainDefinitions",
    ()=>domainDefinitions,
    "domainToSlug",
    ()=>domainToSlug,
    "getBenchmarkIdsForDomain",
    ()=>getBenchmarkIdsForDomain,
    "getBenchmarksForDomain",
    ()=>getBenchmarksForDomain,
    "getDomainForBenchmark",
    ()=>getDomainForBenchmark,
    "getDomainForCategory",
    ()=>getDomainForCategory,
    "slugToDomain",
    ()=>slugToDomain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/benchmarks.ts [app-client] (ecmascript)");
;
const domainDefinitions = [
    {
        id: "Intelligence",
        label: "Intelligence",
        description: "Reasoning, scientific understanding, and complex problem-solving abilities",
        longDescription: "Measures advanced cognitive capabilities including logical reasoning, scientific knowledge, multi-step problem solving, and the ability to tackle novel challenges. Includes benchmarks for GPQA, ARC-AGI, and other frontier reasoning tasks.",
        categories: [
            "Reasoning",
            "Science",
            "STEM",
            "Advanced Tasks"
        ],
        icon: "Brain"
    },
    {
        id: "Knowledge & Communication",
        label: "Knowledge & Communication",
        description: "World knowledge, multilingual capabilities, and real-world understanding",
        longDescription: "Evaluates breadth and depth of world knowledge, language understanding across multiple languages, and ability to communicate effectively. Covers MMLU, HellaSwag, WMT translations, and real-world task performance.",
        categories: [
            "Knowledge",
            "Multilingual",
            "Real-world"
        ],
        icon: "Globe"
    },
    {
        id: "Coding",
        label: "Coding",
        description: "Code generation, software engineering, and programming tasks",
        longDescription: "Tests programming proficiency across multiple languages, software engineering tasks, debugging capabilities, and real-world coding scenarios. Includes HumanEval, MBPP, SWE-bench, and competitive programming benchmarks.",
        categories: [
            "Coding"
        ],
        icon: "Code"
    },
    {
        id: "Math",
        label: "Math",
        description: "Mathematical reasoning, competition math, and quantitative problem-solving",
        longDescription: "Assesses mathematical capabilities from basic arithmetic to competition-level problems. Covers GSM8K, MATH, AIME, and specialized mathematical reasoning benchmarks.",
        categories: [
            "Math"
        ],
        icon: "Calculator"
    },
    {
        id: "Agents & Tools",
        label: "Agents & Tools",
        description: "Tool use, agentic workflows, and instruction following",
        longDescription: "Measures ability to use external tools, follow complex instructions, operate autonomously in multi-step workflows, and function as effective AI agents. Includes BFCL, API-based tasks, and instruction following benchmarks.",
        categories: [
            "Agent",
            "Agentic",
            "Instruction Following"
        ],
        icon: "Bot"
    },
    {
        id: "Vision & Video",
        label: "Vision & Video",
        description: "Image understanding, video analysis, and multimodal capabilities",
        longDescription: "Evaluates visual understanding including image classification, object detection, video comprehension, and multimodal reasoning. Covers MMMU, VQA, video understanding, and cross-modal tasks.",
        categories: [
            "Vision",
            "Video",
            "Multimodal"
        ],
        icon: "Eye"
    },
    {
        id: "Long Context",
        label: "Long Context",
        description: "Performance on extended documents and long-context reasoning",
        longDescription: "Tests ability to process, understand, and reason over very long inputs. Includes needle-in-haystack tests, long-document QA, and benchmarks measuring performance degradation with context length.",
        categories: [
            "Long Context"
        ],
        icon: "Scroll"
    },
    {
        id: "Factuality",
        label: "Factuality",
        description: "Accuracy, hallucination resistance, and factual reliability",
        longDescription: "Measures tendency to produce factually accurate outputs, resistance to hallucinations, and ability to acknowledge uncertainty. Includes TruthfulQA, FACTSCORE, and other factuality benchmarks.",
        categories: [
            "Hallucination"
        ],
        icon: "CheckCircle"
    }
];
const domainCategories = domainDefinitions.reduce((acc, domain)=>{
    acc[domain.id] = domain.categories;
    return acc;
}, {});
function getDomainForCategory(category) {
    for (const domain of domainDefinitions){
        if (domain.categories.includes(category)) {
            return domain.id;
        }
    }
    return null;
}
function getDomainForBenchmark(benchmark) {
    return getDomainForCategory(benchmark.category);
}
function getBenchmarksForDomain(domainId) {
    const definition = domainDefinitions.find((d)=>d.id === domainId);
    if (!definition) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["benchmarks"].filter((b)=>definition.categories.includes(b.category));
}
function getBenchmarkIdsForDomain(domainId) {
    return getBenchmarksForDomain(domainId).map((b)=>b.id);
}
const allDomains = domainDefinitions.map((d)=>d.id);
function domainToSlug(domain) {
    return domain.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-");
}
function slugToDomain(slug) {
    for (const domain of allDomains){
        if (domainToSlug(domain) === slug) {
            return domain;
        }
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/navbar-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavbarClient",
    ()=>NavbarClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domains.ts [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const ThemeToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/layout/theme-toggle.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.ThemeToggle), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/layout/theme-toggle.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-10 w-10 rounded-xl border border-border bg-card",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/navbar-client.tsx",
            lineNumber: 25,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ThemeToggle;
const CommandPalette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/layout/command-palette.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.CommandPalette), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/layout/command-palette.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = CommandPalette;
function NavbarClient({ models, benchmarks }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [commandOpen, setCommandOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasOpenedCommand, setHasOpenedCommand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openCommandPalette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavbarClient.useCallback[openCommandPalette]": ()=>{
            setHasOpenedCommand(true);
            setCommandOpen(true);
        }
    }["NavbarClient.useCallback[openCommandPalette]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavbarClient.useEffect": ()=>{
            const handleKeyDown = {
                "NavbarClient.useEffect.handleKeyDown": (event)=>{
                    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
                        event.preventDefault();
                        openCommandPalette();
                    }
                }
            }["NavbarClient.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "NavbarClient.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["NavbarClient.useEffect"];
        }
    }["NavbarClient.useEffect"], [
        openCommandPalette
    ]);
    const navItems = [
        {
            href: "/",
            label: "Leaderboard"
        },
        {
            href: "/benchmarks",
            label: "Benchmarks"
        },
        {
            href: "/explore",
            label: "Explore"
        },
        {
            href: "/compare",
            label: "Compare"
        },
        {
            href: "/api-docs",
            label: "API"
        },
        {
            href: "/about",
            label: "Methodology"
        }
    ];
    const isActive = (href)=>{
        if (href === "/") return pathname === "/" || pathname.startsWith("/leaderboard/");
        return pathname === href || pathname.startsWith(`${href}/`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            hasOpenedCommand ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommandPalette, {
                open: commandOpen,
                onOpenChange: setCommandOpen,
                models: models,
                benchmarks: benchmarks
            }, void 0, false, {
                fileName: "[project]/src/components/layout/navbar-client.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto flex h-14 items-center justify-between gap-3 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 lg:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "group flex items-center gap-2.5 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:shadow-primary/20 transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                className: "h-3.5 w-3.5",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary",
                                            children: "Registry"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden lg:flex lg:items-center lg:gap-1",
                                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-4 py-1.5 text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap", isActive(item.href) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
                                            children: item.label
                                        }, item.href, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-3 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: openCommandPalette,
                                    className: "hidden sm:flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors shrink-0",
                                    "aria-label": "Open search",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "h-3.5 w-3.5 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden md:inline",
                                            children: "Search…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "pointer-events-none ml-2 hidden md:inline-flex rounded border border-border/60 bg-muted px-1.5 py-0.5 font-mono text-[10px]",
                                            children: "⌘K"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 border-l border-border/40 pl-2 sm:pl-3 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeToggle, {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://github.com/jnd0/llm-registry",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0",
                                            "aria-label": "Open GitHub repository",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "h-4 w-4",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "h-8 w-8 lg:hidden shrink-0",
                                                "aria-label": "Open navigation menu",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                    className: "h-4 w-4",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                            align: "end",
                                            className: "min-w-[220px] rounded-xl border-border bg-card p-1.5 shadow-xl lg:hidden",
                                            children: [
                                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg py-2 text-xs font-bold uppercase tracking-widest", isActive(item.href) ? "bg-primary/5 text-primary" : "text-foreground"),
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, item.href, false, {
                                                        fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                    className: "my-1 bg-border/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                    className: "px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                                                    children: "Domains"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainDefinitions"].map((domain)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/domain/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainToSlug"])(domain.id)}`,
                                                            className: "rounded-lg py-2 text-xs text-foreground",
                                                            children: domain.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, domain.id, false, {
                                                        fileName: "[project]/src/components/layout/navbar-client.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/navbar-client.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/navbar-client.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/navbar-client.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(NavbarClient, "18bxfVHY5lph1VWqNb3OoPOVT/A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c2 = NavbarClient;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ThemeToggle");
__turbopack_context__.k.register(_c1, "CommandPalette");
__turbopack_context__.k.register(_c2, "NavbarClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript) <export * as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Provider, {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TooltipProvider;
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Root, {
        "data-slot": "tooltip",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c1 = Tooltip;
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Trigger, {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c2 = TooltipTrigger;
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Content, {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Arrow, {
                    className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/tooltip.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_af878d5d._.js.map