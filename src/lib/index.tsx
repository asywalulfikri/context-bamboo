import * as React from "react";
type s =
  | React.ComponentType<any>
  | React.Context<any>
  | React.FunctionComponentElement<any>;

export const useProviders = (...contexts: React.Context<any>[]) => (
  element: React.ComponentType<any>
) => {
  const rendered = contexts.reverse().reduce(function(prev: s, next) {
    return React.createElement<any>(next["Provider"], { value: "s" }, prev);
  }, element);

  return rendered;
};
