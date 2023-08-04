import "../scss/aside.scss";
export const Aside = () => {
  return (
    <aside className="indicator-wrapper">
      <ul className="indicator-list">
        <li className="indicator-item" data-active="true">
          <p className="indi-number">STEP 1</p>
          <p className="indi-title">YOUR INFO</p>
        </li>
        <li className="indicator-item" data-active="false">
          <p className="indi-number">STEP 2</p>
          <p className="indi-title">SELECT PLAN</p>
        </li>
        <li className="indicator-item" data-active="false">
          <p className="indi-number">STEP 3</p>
          <p className="indi-title">ADD-ONS</p>
        </li>
        <li className="indicator-item" data-active="false">
          <p className="indi-number">STEP 4</p>
          <p className="indi-title">SUMMARY</p>
        </li>
      </ul>
    </aside>
  );
};
