import PfeIcon from "@patternfly/pfe-icon";
import "@patternfly/pfe-datetime";
import "@patternfly/pfe-cta";

PfeIcon.addIconSet(
  "far",
  `${ojEnv.baseURL}/icons/font-awesome/regular`,
  (iconName, setName, path) => {
    const name = iconName.replace("far-", "");
    return `${path}/${name}.svg`;
  }
);

PfeIcon.addIconSet(
  "fas",
  `${ojEnv.baseURL}/icons/font-awesome/solid`,
  (iconName, setName, path) => {
    const name = iconName.replace("fas-", "");
    return `${path}/${name}.svg`;
  }
);

PfeIcon.addIconSet(
  "fab",
  `${ojEnv.baseURL}/icons/font-awesome/brands`,
  (iconName, setName, path) => {
    const name = iconName.replace("fab-", "");
    return `${path}/${name}.svg`;
  }
);
