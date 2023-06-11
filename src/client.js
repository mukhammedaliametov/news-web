import client from '@sanity/client';

export default client({
  projectId: '8l6l4nld',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-11'
});
