//Este selector sería más para meter la IA que otra cosa.

import { useState } from "react";

const AISelector: React.FC = () => {
  const [filters, setFilters] = useState({
    pondType: "",
  });

  return (
    <section className="smart-selector">
      <div>
        <p>
          ¿Do you prefer to be a big fish in a small pond or a small fish in a
          big pond?
        </p>
        <div>
          <label>
            <input
              type="radio"
              checked={filters.pondType === "big_fish_small_pond"}
              onChange={() =>
                setFilters({ ...filters, pondType: "big_fish_small_pond" })
              }
            />
            Big fish in a small pond
          </label>
          <label>
            <input
              type="radio"
              checked={filters.pondType === "small_fish_big_pond"}
              onChange={() =>
                setFilters({ ...filters, pondType: "small_fish_big_pond" })
              }
            />
            Small fish in a big pond
          </label>
        </div>
      </div>
    </section>
  );
};

export default AISelector;
