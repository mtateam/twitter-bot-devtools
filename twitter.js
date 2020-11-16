let list = [];
let arrangeInterval = async () => {
  return new Promise(async (resolve, reject) => {
    let followersDiv = document.querySelector(
      '[aria-label="Timeline: Followers"]'
    );
    list = document.querySelector("body").querySelectorAll("span");
    list = [...list].filter((el) => el.innerText == "Follow");
    if (list.length == 0) {
      document.scrollingElement.scrollTop = followersDiv.scrollHeight;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      resolve(true);
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
        resolve(true);
      }
    }, 60000);
  });
};

let awaitInterval = async () => {
  let res = true;
  let idx = 0;
  while (res) {
    try {
      idx++;
      res = await arrangeInterval();
    } catch (error) {
      console.log({ error });
      res = false;
    }
  }
};

awaitInterval();
