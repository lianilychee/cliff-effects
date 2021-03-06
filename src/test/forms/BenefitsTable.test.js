import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BenefitsTable } from '../../forms/BenefitsTable';

configure({ adapter: new Adapter() });

test('Benefits table renders correctly', () => {
  const client = {"current":{"hasSnap":false,"hasHousing":false,"household":[{"m_age":30,"m_role":"head","m_disabled":false}],"earned":0,"TAFDC":0,"SSI":0,"SSDI":0,"childSupportIn":0,"unemployment":0,"workersComp":0,"pension":0,"socialSecurity":0,"alimony":0,"otherIncome":0,"incomeExclusions":0,"childDirectCare":0,"childBeforeAndAfterSchoolCare":0,"childTransportation":0,"childOtherCare":0,"earnedBecauseOfChildCare":0,"childSupportPaidOut":0,"adultDirectCare":0,"adultTransportation":0,"adultOtherCare":0,"disabledAssistance":0,"earnedBecauseOfAdultCare":0,"disabledMedical":0,"otherMedical":0,"shelter":"homeless","contractRent":0,"rentShare":0,"rent":0,"mortgage":0,"housingInsurance":0,"propertyTax":0,"climateControl":false,"nonHeatElectricity":false,"phone":false,"fuelAssistance":false,"otherExpenses":0},"future":{"hasSnap":false,"hasHousing":false,"household":[{"m_age":30,"m_role":"head","m_disabled":false}],"earned":0,"TAFDC":0,"SSI":0,"SSDI":0,"childSupportIn":0,"unemployment":0,"workersComp":0,"pension":0,"socialSecurity":0,"alimony":0,"otherIncome":0,"incomeExclusions":0,"childDirectCare":0,"childBeforeAndAfterSchoolCare":0,"childTransportation":0,"childOtherCare":0,"earnedBecauseOfChildCare":0,"childSupportPaidOut":0,"adultDirectCare":0,"adultTransportation":0,"adultOtherCare":0,"disabledAssistance":0,"earnedBecauseOfAdultCare":0,"disabledMedical":0,"otherMedical":0,"shelter":"homeless","contractRent":0,"rentShare":0,"rent":0,"mortgage":0,"housingInsurance":0,"propertyTax":0,"climateControl":false,"nonHeatElectricity":false,"phone":false,"fuelAssistance":false,"otherExpenses":0},"snapAlert":"good","housingAlert":"good","currentHomeless":false,"currentHomeowner":false}
  const rendered = renderer.create(
    <BenefitsTable client={client}/>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});