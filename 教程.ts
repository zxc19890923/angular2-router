1. 首先在app.module.ts文件中import router

import {RouterModule, Routes} from "@angular/router"

2. 在app.module.ts文件中配置路由

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
];

3. app.module.ts中使用RouterModule.forRoot()引入定义的路由

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})

4. app.Component.ts为主组件，所以它是一个导航界面，所有将路由显示到它的模板中

<router-outlet></router-outlet>

5. 配置index.html文件

在head标签中引入基本默认地址
 <base href="/">

body标签中加入主组件的选择标示 <my-app></my-app>

这样路由就可以运行了




--------------------------------------------------------------------------------------------------------
嵌套路由

主要就是children属性， 有子路由的可以设置children, 然后给他分配路由，然后再它对应的模板中添加导航和<router-outlet></router-outlet>


app.module.ts文件
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

// 表单 双向数据绑定
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
// List中包含两个tab子组件
import {ListComponent} from "./list.component";
import {ListOneComponent} from "./list-one.component";
import {ListTwoComponent} from "./list-two.component";
import {HomeComponent} from "./home.component";
// 定义路由, bootstrap默认加载组件就是AppComponent,所以他就是主页导航页,然后添加的路由都在他的模板中。

// 可以所有代码写在NgModule中, 也可以这样自定义常量,然后使用。

// 定义常量 嵌套自路由
const appChildRoutes: Routes = [
  {path: "one", component: ListOneComponent},
  {path: "two", component: ListTwoComponent}
];
// 定义常量 路由
const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'list',
    component: ListComponent,
    // children:[{path: "one", component: ListOneComponent}]} 直接定义在里面
    children: appChildRoutes
];
// 引用定义的路由
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    ListOneComponent,
    ListTwoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

有子路由的模板界面
  <div>
  <!-- 子路由连接 -->
  <a routerLink="one">one</a>
  <a routerLink="two">two</a>
  <!-- 路由内容显示标签 -->
  <router-outlet></router-outlet>
</div>
