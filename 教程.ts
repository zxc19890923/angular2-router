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
