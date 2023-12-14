// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'increase/resource';
import * as AccountEnrollmentsAPI from 'increase/resources/intrafi/account-enrollments';
import * as BalancesAPI from 'increase/resources/intrafi/balances';
import * as ExclusionsAPI from 'increase/resources/intrafi/exclusions';

export class Intrafi extends APIResource {
  accountEnrollments: AccountEnrollmentsAPI.AccountEnrollments = new AccountEnrollmentsAPI.AccountEnrollments(
    this._client,
  );
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  exclusions: ExclusionsAPI.Exclusions = new ExclusionsAPI.Exclusions(this._client);
}

export namespace Intrafi {
  export import AccountEnrollments = AccountEnrollmentsAPI.AccountEnrollments;
  export import IntrafiAccountEnrollment = AccountEnrollmentsAPI.IntrafiAccountEnrollment;
  export import IntrafiAccountEnrollmentsPage = AccountEnrollmentsAPI.IntrafiAccountEnrollmentsPage;
  export import AccountEnrollmentCreateParams = AccountEnrollmentsAPI.AccountEnrollmentCreateParams;
  export import AccountEnrollmentListParams = AccountEnrollmentsAPI.AccountEnrollmentListParams;
  export import Balances = BalancesAPI.Balances;
  export import IntrafiBalance = BalancesAPI.IntrafiBalance;
  export import Exclusions = ExclusionsAPI.Exclusions;
  export import IntrafiExclusion = ExclusionsAPI.IntrafiExclusion;
  export import IntrafiExclusionsPage = ExclusionsAPI.IntrafiExclusionsPage;
  export import ExclusionCreateParams = ExclusionsAPI.ExclusionCreateParams;
  export import ExclusionListParams = ExclusionsAPI.ExclusionListParams;
}
