import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'SignIn' }).click();
  await page.getByRole('link', { name: 'SignUp' }).click();
  await page.goto('https://identity.eventbookings.com/auth/signup?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fsignup%3Dtrue%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.eventbookings.com%252Fb%252Fmember%26client_id%3Dwebapp%26nonce%3D11ce9daa89860c49832e%26state%3D77d9333ac798997c27d1fab18cfc4e%26scope%3Doffline_access%2520email%2520profile%2520IdentityServerApi%2520openid%26code_challenge%3DfXKLkJOhdyAdsvlDXooqvsL12q41rPzEXjmi0sSTxXE%26code_challenge_method%3DS256');

});