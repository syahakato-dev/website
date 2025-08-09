import React from "react";

export type BasePagePropsParams<T extends object> = {
  params: T;
};

export type BasePagePropsSearchParams<T extends object> = {
  searchParams: T;
};

export type PageProps<
  P extends object | undefined = undefined,
  S extends object | undefined = undefined
> = [P, S] extends [undefined, undefined]
  ? React.FC
  : [S] extends [undefined]
  ? React.FC<BasePagePropsParams<NonNullable<P>>>
  : [P] extends [undefined]
  ? React.FC<BasePagePropsSearchParams<NonNullable<S>>>
  : React.FC<
      BasePagePropsParams<NonNullable<P>> &
        BasePagePropsSearchParams<NonNullable<S>>
    >;
