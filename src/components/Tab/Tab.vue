
<template>
  <div class="menu">
    <nav class="navbar navbar-expand-md ">

      <ul class="navbar-nav">
        <li :class="{ 'nav-item': true, 'active': $route.path === '/eventdetails/' }">
          <router-link to="/eventdetails/" class="nav-link">
            Create Storage
          </router-link>
        </li>

        <li :class="{ 'nav-item': true, 'active': $route.path === '/uploaddocument/' }">
          <router-link to="/uploaddocument/" class="nav-link">
            Upload Document
          </router-link>
        </li>

        <li :class="{ 'nav-item': true, 'active': $route.path === '/confirmevent/' }">
          <router-link to="/confirmevent/" class="nav-link">
            Confirm Event
          </router-link>
        </li>

        <li :class="{ 'nav-item': true, 'active': $route.path === '/scheduledate/' }">
          <router-link to="/scheduledate/" class="nav-link">
            Schedule Date
          </router-link>
        </li>

        <li :class="{ 'nav-item': true, 'active': $route.path === '/invitation/' }">
          <router-link to="/invitation/" class="nav-link">
            Invitation
          </router-link>
        </li>
      </ul>

    </nav>

  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.navbar {
  border-bottom: 1px solid #808080;
  width: 100%;
  flex-wrap: nowrap;
}

.navbar-nav .nav-item:first-child .nav-link {
  padding-left: 0;
}

.nav-item {
  margin-top: 10px;
  margin-right: 45px;
  position: relative;
}

.nav-link {
  color: var(--Grey-Dark, #808080);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}

.link {
  margin-right: 40px;
}

.active::after {
  content: '';
  position: absolute;
  display: block;

  width: 100%;
  height: 5px;
  bottom: -8px;
  margin: auto;
  border: 5px;
  background: #227cbf;
  color: #227cbf;
}
</style>