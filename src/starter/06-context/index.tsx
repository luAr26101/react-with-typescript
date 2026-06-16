import ThemeProvider from "./context";
import useTheme from "./useTheme";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <h2>React & Typescript</h2>
      <button
        onClick={() => {
          if (theme === "dark") {
            setTheme("system");
            return;
          }
          setTheme("dark");
        }}
        className='btn btn-center'
      >
        toggle theme
      </button>
    </div>
  );
}
export default ParentComponent;
