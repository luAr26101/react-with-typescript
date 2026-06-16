type Basic = {
  type: "basic";
  name: string;
};

type Advanced = {
  type: "advanced";
  name: string;
  email: string;
};

function Component(props: Basic | Advanced) {
  const { type, name } = props;
  const email = type === "advanced" ? props.email : undefined;

  if (type === "basic") {
    return (
      <article className='alert alert-success'>
        <h2>User: {name}</h2>
      </article>
    );
  }
  return (
    <article className='alert alert-danger'>
      <h2>User: {name}</h2>
      <h2>Email: {email}</h2>
    </article>
  );
}
export default Component;
