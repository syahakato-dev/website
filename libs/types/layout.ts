import React from "react";

export type BaseLayoutPropsWithParams<T extends object | undefined> =
  React.PropsWithChildren & {
    params: Promise<T>;
  };

export type BaseLayoutPropsWithoutParams = React.PropsWithChildren;

export type BaseLayoutProps<T extends object | undefined = undefined> = [
  T
] extends [undefined]
  ? BaseLayoutPropsWithoutParams
  : BaseLayoutPropsWithParams<T>;

export type LayoutProps<T extends object | undefined = undefined> = React.FC<
  BaseLayoutProps<T>
>;

export type LayoutPropsWithoutParams = React.FC<BaseLayoutPropsWithoutParams>;

export type LayoutPropsWithParams<T extends object> = React.FC<
  BaseLayoutPropsWithParams<T>
>;
