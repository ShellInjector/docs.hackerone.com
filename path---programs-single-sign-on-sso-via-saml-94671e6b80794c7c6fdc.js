webpackJsonp([0xd5651e2ed3ae],{430:function(t,e){t.exports={data:{markdownRemark:{html:'<p>HackerOne supports Single Sign-On (SSO) through Security Assertion Markup Language 2.0 (SAML 2.0) for these providers:</p>\n<ul>\n<li>Google</li>\n<li>Okta</li>\n<li>OneLogin</li>\n<li>Bitium</li>\n<li>Centrify</li>\n<li>MS ADFS</li>\n<li>Azure Active Directory</li>\n<li>Ping Identity</li>\n</ul>\n<p><a href="https://support.hackerone.com/hc/en-us/requests/new">Contact HackerOne</a> if you have another SAML provider.</p>\n<h3>Set Up</h3>\n<p>To configure Single Sign-On via SAML:</p>\n<ol>\n<li>Go to: <strong>Settings > General > Authentication</strong>.</li>\n<li>In the <strong>SAML</strong> section, click <strong>Add SAML settings</strong> to add your provider information.</li>\n<li>Enter information for these fields:</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Field</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Email Domain</td>\n<td>The email domain for users that will be required to use SAML authentication.</td>\n</tr>\n<tr>\n<td>Single Sign On URL</td>\n<td>The URL from your SAML provider to initiate a single sign-on attempt, sometimes called the login URL.</td>\n</tr>\n<tr>\n<td>X509 Certificate</td>\n<td>The certificate from your SAML provider to verify the single sign-on reponse.</td>\n</tr>\n</tbody>\n</table>\n<ol start="4">\n<li>Click <strong>Run test</strong>. This will launch a new window that\'ll allow a test login.</li>\n<li>Enter your login credentials to the test window. After your login attempt, the test will either succeed or fail and provide warning messages about your test login in the <strong>Status</strong> section.</li>\n<li>If your test fails, you can click the <strong>Run another test</strong> link.</li>\n<li>If your test is successful, request approval of your settings by clicking <strong>Request Verification</strong>.</li>\n<li>HackerOne will review and verify your SAML settings and notify you within 1 business day after the review is complete.</li>\n<li>After HackerOne approves your request, click the <strong>Migrate Users</strong> button when you\'re ready to enable SAML for all of your users.</li>\n</ol>\n<p><em>Note: Your team must be launched and not in sandbox mode to set up SAML.</em></p>\n<h3>Frequently Asked Questions</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Answer</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>What is your metadata endpoint?</td>\n<td><a href="https://hackerone.com/users/saml/metadata">https://hackerone.com/users/saml/metadata</a></td>\n</tr>\n<tr>\n<td>Do you support Just In Time (JIT) provisioning?</td>\n<td>Yes, a new account will be created, but that account won\'t have access to any teams by default as a team admin will need to invite the user. If you\'d like users to auto join your team, \n<a href="https://support.hackerone.com/hc/en-us/requests/new">contact HackerOne</a>\n for more information.</td>\n</tr>\n<tr>\n<td>What happens to my existing 2FA and password?</td>\n<td>Your 2FA and password settings will be deleted and you\'ll only be able to login with SSO when you\'re migrated. The SSO provider is expected to handle 2FA.</td>\n</tr>\n<tr>\n<td>Do you support SAML and password login?</td>\n<td>No, once a user is SAML enabled, they won\'t be able to login with their password.</td>\n</tr>\n<tr>\n<td>Is SAML configurable on a per user basis?</td>\n<td>No, all users belonging to a SAML enabled domain will be required to use SAML authentication.</td>\n</tr>\n<tr>\n<td>Do you support custom session times?</td>\n<td>Yes, HackerOne will respect the SessionNotOnOrAfter attribute if provided during authentication. This will allow you to customize the length of the session up to an upper bound of 2 weeks. If provide this value, it\'ll be the source of truth and the \n<em>remember me</em>\n will be ignored.</td>\n</tr>\n<tr>\n<td>Do you support Single Logout?</td>\n<td>No, we don\'t support single logout at this time.</td>\n</tr>\n<tr>\n<td>What happens to users on my team that don\'t belong to our claimed domain?</td>\n<td>Turning on SSO will only affect users of the claimed domain. Any users that are using e-mail addresses on other domains will not be affected.</td>\n</tr>\n<tr>\n<td>What is your Entity ID?</td>\n<td>Our entity id is hackerone.com</td>\n</tr>\n<tr>\n<td>What is your ACS URL?</td>\n<td>Our ACS URL is \n<a href="https://hackerone.com/users/saml/auth">https://hackerone.com/users/saml/auth</a></td>\n</tr>\n</tbody>\n</table>\n<h3>Additional Information</h3>\n<p>Here are some screenshots that provide additional details on Service Provider and Attribute mapping:</p>\n<p><img src="./images/saml_1.png?raw=true" alt="saml1"></p>\n<p><img src="./images/saml_2.png?raw=true" alt="saml_2"></p>',frontmatter:{path:"/programs/single-sign-on-sso-via-saml",title:"Single Sign-On (SSO) via SAML"}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-single-sign-on-sso-via-saml-94671e6b80794c7c6fdc.js.map