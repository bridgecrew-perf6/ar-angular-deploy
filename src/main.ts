import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Core } from '@grapecity/activereports';

Core.setLicenseKey(
  'Sergey Abakumov,red-cliff-06d3a7d10.azurestaticapps.net,E495161834119651#B0rXq5awMVOwhVUNBDdJNmd6YVOxBXRDRmS7tidKpmNx4GSaNHR9MnS8EzRrNTdzYVbDlENttEb7ATYZV7YNF7dX9EbKdjSaFzdNlUORBXOIBXRpp5Y5hUMVFUMsdjd5BXVLZ7bFJEMstSZx3yYjpXNSdjZ8QnN8gFdCJXayNFRN9EO4V4VpBnUCF7NQZ7QQVUO8oXetdDcpZ7N8lWb8lUOxRGa8d6VQ3GSGVXUTR4TrBleQJVU0BnZVp5ajdWaqN4cRpERsFTdRBlYYJ5Q59mV7I5MTZ5Q096V7YEODlWM4JGdalWbDFTeCJTMP36NLNFeIRjTtFmRtpEbHJXRZZnM9YlczNmUVJkI0IyUiwiIBRjN7ADRDRjI0ICSiwSM6YTMzAzNwATM0IicfJye&Qf35VfikkVBVkI0IyQiwiIyYFITpEdy3GclJVZ6lGdjFkI0IiTis7W0ICZyBlIsIiNwkDNxADI9EjMxAjMwIjI0ICdyNkIsICOxEDMxIDMyIiOiAHeFJCLiQXZu9ycwBXYjlGdhR7clJXd0FmLwEDZ7E6MkZDMtYmZpx6YtQWZyJiOiMXbEJCLiY7btV7ahJWQgkXZnJXZTJiOiEmTDJCLlVnc4pjIsZXRiwiIxUjN9ETM4MDOxYTM5kDNiojIklkIs4XZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zd6gnQmhnNSVFa9dEMjhUa0J6dzJmUvUjYS9WRyglN8MFdJF6RKFVTEJ7LldzbMRjYxQ6bQZkWoJ5LKxUMzgkbjtCbR3yb78ke7kV1xwW'
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
