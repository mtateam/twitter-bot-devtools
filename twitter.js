let list = [];
let arrangeInterval = async () => {
  let followersDiv = document.querySelector(
    '[aria-label="Timeline: Followers"]'
  );
  list = document.querySelector("body").querySelectorAll("span");
  list = [...list].filter((el) => el.innerText == "Follow");
  if (list.length == 0) {
    document.scrollingElement.scrollTop = followersDiv.scrollHeight;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    arrangeInterval();
  }
  let index = 1;
  console.log(index);
  console.log(list);
  let interval = setInterval(async () => {
    if (index <= list.length - 2) {
      console.log(index);
      list[index].scrollIntoView();
      await new Promise((resolve) => setTimeout(resolve, 1000));

      document.scrollingElement.scrollTop += -150;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      list[index].innerText == "Follow" && list[index].click();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      list[index + 1].innerText == "Follow" && list[index + 1].click();
      index += 2;
    } else {
      document.scrollingElement.scrollTop = followersDiv.scrollHeight;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      clearInterval(interval);
      arrangeInterval();
    }
  }, 20000);
};
arrangeInterval();
