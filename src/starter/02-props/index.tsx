// function Component({
//   name,
//   id,
// }: {
//   name: string;
//   id: number;
// }): React.JSX.Element {
//   return (
//     <div>
//       <h2>React & Typescript</h2>
//       <h2>
//         {name}: {id}
//       </h2>
//     </div>
//   );
// }
// export default Component;

import { type PropsWithChildren } from "react";

type ComponentProps = {
  name: string;
  id: number;
};

// interface IComponentProps extends PropsWithChildren {
//   name: string;
//   id: number;
// }

type ComponentPropsWithChildren = PropsWithChildren<ComponentProps>;

function Component(props: ComponentPropsWithChildren): React.JSX.Element {
  const { name, id, children } = props;
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>
        {name}: {id}
      </h2>
      {children && <div style={{ textAlign: "center" }}>{children}</div>}{" "}
      {/* Render children if provided */}
    </div>
  );
}
export default Component;
