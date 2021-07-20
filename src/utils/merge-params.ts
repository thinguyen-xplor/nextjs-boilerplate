export default (url: string, params: any) => {
  if (typeof url !== 'string') {
    throw new Error('Invalid url in merge-params');
  }

  const fulfillPaths = url.split('/').map((path) => {
    if (path.startsWith(':')) {
      return params[path.substring(1)];
    }

    return path;
  });

  return fulfillPaths.join('/');
};
