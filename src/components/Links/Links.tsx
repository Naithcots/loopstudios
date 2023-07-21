import { useState } from "react";
import links from "../../data/links";
import Link from "./Link";

type Props = {
  styles: CSSModuleClasses;
};

const Links = ({ styles }: Props) => {
  const [activeLinkId, setActiveLinkId] = useState<number | null>(null);
  const setActiveLinkHandler = (id: number) => setActiveLinkId(id);

  return (
    <div className={styles.links}>
      {links.map((link, idx) => (
        <Link
          styles={styles}
          data={{ ...link, idx }}
          activeId={activeLinkId}
          setActiveId={setActiveLinkHandler}
          key={idx}
        />
      ))}
    </div>
  );
};
export default Links;
