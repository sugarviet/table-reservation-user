import { useState } from "react";

function useNavbar() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);


  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  const handleShowDrawable = () => {
      setDrawerVisible(!isDrawerVisible);
    };

    const handleShowSearchBar = () => {
        setIsShowSearchBar(!isShowSearchBar);
      }

  return {
    isDrawerVisible,
    hideDrawer,
    handleShowDrawable,
    isShowSearchBar,
    handleShowSearchBar
  }
}

export default useNavbar;
