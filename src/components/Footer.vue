<template>
  <div class="footer">
    <div class="title-item">
      <div class="title-item-des">PRODUCTS</div>
      <li>Red Hat Ansible Automation Platform</li>
      <li>Enterprise Linux</li>
      <li>OpenStack Platform</li>
      <li>See all products</li>
    </div>
    <div class="title-item">
      <div class="title-item-des">TOOLS</div>
      <li>My account</li>
      <li>Customer Support</li>
      <li>Developer Resources</li>
      <li>Learning community</li>
      <li>Resource library</li>
    </div>
    <div class="title-item">
      <div class="title-item-des">TRY,BUY,SELL</div>
      <li>Product trial center</li>
      <li>Shoe store</li>
      <li>Contact Sales</li>
    </div>
    <div class="title-item">
      <div class="title-item-des">COMMUNICATE</div>
      <li>Contac us !</li>
      <li>Feedback</li>
      <li>Social</li>
    </div>
    <div class="title-item tile-about">
      <div class="title-item-des">ABOUT</div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nihil
        nesciunt molestiae debitis. Animi corrupti necessitatibus a unde ullam.
        Dolorem quis odit sit blanditiis voluptatem ea dicta non autem
        provident.
      </p>
      <ul class="item-icon">
        <li>
          <a
            class="ti-github"
            href="https://github.com/GiangNguyen28-glicth"
          ></a>
        </li>
        <li>
          <a
            class="ti-mobile"
            href="https://www.facebook.com/profile.php?id=100009583830555"
          ></a>
        </li>
        <li>
          <a
            class="ti-twitter"
            href="https://www.facebook.com/profile.php?id=100009583830555"
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  padding: 0 92px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 46px;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  font-family: "Helvetica Neue", Arial, sans-serif;
}
.title-item {
  padding: 12px 16px;
  flex-basis: 18%;
  list-style: none;
  color: #fff;
}
.title-item li {
  padding: 12px 0px;
}
.title-item p {
  padding: 12px 0px;
}
.item-icon {
  list-style: none;
  display: inline;
}
.item-icon a:hover{
  opacity: 0.6;
}
.item-icon li, .item-icon a{
  display: inline;
  text-decoration: none;
  padding-right: 12px;
  color: #fff;
}
.tile-about {
  background-color: red !important;
}
.title-item-des {
  margin: 16px 0px;
}
</style>