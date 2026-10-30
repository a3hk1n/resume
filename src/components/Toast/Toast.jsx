export default function Toast({ message }) {
  return (
    <div id="toast" role="status" className={message ? "s" : ""}>
      {message}
    </div>
  );
}
