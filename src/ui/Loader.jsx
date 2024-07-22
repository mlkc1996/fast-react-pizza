function Loader() {
  return (
    <dialog
      open
      className="flex h-full w-full items-center justify-center bg-slate-200/20 backdrop-blur-sm"
    >
      <div className="loader"></div>
    </dialog>
  );
}

export default Loader;
