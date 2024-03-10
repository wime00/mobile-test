import { Component, inject } from '@angular/core';
import { UserAgentService } from './user-agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobile-test';

  agent = inject(UserAgentService);

  handleClick(device: string) {
    const agentInfo = this.agent.isMobile();
    console.log(agentInfo);

    const r = 'a4904c4c-3bb4-4e3f-8ac3-0e950e529e5f';

    if(this.agent.isDesktop()) {
      window.location.href = `bankid:///?autostarttoken=${r}&redirect=null`
    }

    if(this.agent.isMobile()) {
      window.location.href = `https://app.bankid.com/?autostarttoken=${r}&redirect=null`
    }


  }




}
