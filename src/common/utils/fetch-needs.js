export default (store, components, params) => {
  const needs = components.reduce( (prev, current) => {
    return (current.need || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.need : []) || [])
      .concat(prev);
    }, []);

    return Promise.all(
      needs.map(need => store.dispatch(need(params)))
    );
}
