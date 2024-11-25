export enum EmailTemplate {
  AuthApproveSubnet = 'auth/approve-subnet',
  AuthEmailVerification = 'auth/email-verification',
  AuthEnableEmailMfa = 'auth/enable-email-mfa',
  AuthLoginLink = 'auth/login-link',
  AuthPasswordReset = 'auth/password-reset',
  AuthResendEmailVerification = 'auth/resend-email-verification',
  AuthUsedBackupCode = 'auth/used-backup-code',
  TeamsInvitation = 'teams/invitation',
  UsersDeactivated = 'users/deactivated',
  UsersMergeRequest = 'users/merge-request',
  UsersPasswordChanged = 'users/password-changed',
}

export interface EmailParams {
  toAddress: string;
  subject?: string;
  plainText?: string;
  html?: string;
}

export interface EmailParamsWithTemplate {
  toAddress: string;
  template: EmailTemplate;
  data: any;
}
