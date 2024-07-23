export default function Box(props) {
  const styles = props.on ? "bg-gray-900" : "bg-gray-400";
  return (
    <button
      onClick={props.toggle}
      className={`h-[200px] w-[200px] rounded-lg ${styles}`}
    ></button>
  );
}
