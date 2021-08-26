import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export function LinkSection() {
  return (
    <Breadcrumb separator="-" px="6" py="5.55">

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="#">
          Forms
        </BreadcrumbLink>
      </BreadcrumbItem>

    </Breadcrumb>
  );
}
