import { NxtpSdkUtils } from "@connext/nxtp-sdk";
import { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

import { getTransfersByUserSchema, getTransfersByStatusSchema, getTransfersByRouterSchema } from "./types/api";

export const utilsRoutes = async (server: FastifyInstance, sdkUtilsInstance: NxtpSdkUtils): Promise<any> => {
  const s = server.withTypeProvider<TypeBoxTypeProvider>();

  s.post(
    "/getTransfersByUser",
    {
      schema: {
        body: getTransfersByUserSchema,
      },
    },
    async (request, reply) => {
      const { params } = request.body;
      const res = await sdkUtilsInstance.getTransfersByUser(params);
      reply.status(200).send(res);
    },
  );

  s.post(
    "/getTransfersByStatus",
    {
      schema: {
        body: getTransfersByStatusSchema,
      },
    },
    async (request, reply) => {
      const { params } = request.body;
      const res = await sdkUtilsInstance.getTransfersByStatus(params);
      reply.status(200).send(res);
    },
  );

  s.post(
    "/getTransfersByRouter",
    {
      schema: {
        body: getTransfersByRouterSchema,
      },
    },
    async (request, reply) => {
      const { params } = request.body;
      const res = await sdkUtilsInstance.getTransfersByRouter(params);
      reply.status(200).send(res);
    },
  );
};
