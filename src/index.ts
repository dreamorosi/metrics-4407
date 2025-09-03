import { Metrics } from '@aws-lambda-powertools/metrics';
import type { Context } from 'aws-lambda';

const metrics = new Metrics({
  namespace: 'MyService',
  serviceName: 'MyServiceHandler',
});

export const handler = async (_event: unknown, _context: Context) => {
  metrics.addMetric('SuccessfulInvocations', 'Count', 1);

  metrics.publishStoredMetrics();

  return {
    statusCode: 200,
    body: JSON.stringify('Hello, World!'),
  };
};
