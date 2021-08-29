import React from 'react';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export function LinkSection() {
  return (
    <Breadcrumb
      display={{ base: 'none', '2lg': 'block' }}
      data-testid="breadcrumb"
      separator="-"
      px="6"
      py="5.55"
    >
      <BreadcrumbItem>
        <BreadcrumbLink to="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink to="#">Forms</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
