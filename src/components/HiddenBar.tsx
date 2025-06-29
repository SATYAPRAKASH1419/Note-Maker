export const HiddenBar = () => {
  return (
    <div className="flex flex-col m-1 gap-2 bg-red-500 ">
      <div>
        <div className="flex flex-col ">
          <button>All Notes</button>
          <button>Trash</button>
        </div>
        <div className="flex flex-col ">
          <button>Profile</button>

          <button>Settings</button>
        </div>

        <div className="flex flex-col items-center">
          <div>Help & Support</div>
          <div>About</div>
        </div>
      </div>
    </div>
  );
};
