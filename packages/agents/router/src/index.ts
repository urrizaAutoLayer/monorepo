import tracer from "dd-trace";
import { makeRouter } from "./router";

export { NxtpRouterConfig, ChainConfig } from "./config";
export { makeRouter };

tracer.init();
makeRouter();
