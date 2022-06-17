import React from "react";
import type { LinkProps } from "../Link";
import { Link } from "../Link";

export const WebsiteLink: React.FC<LinkProps> = ({ to, ...props }) => (
  <Link to={to} {...props}>{`- Website: ${String(to)}`}</Link>
);

export const RepositoryLink: React.FC<LinkProps> = ({ to, ...props }) => (
  <Link to={to} {...props}>{`- Repository: ${String(to)}`}</Link>
);
