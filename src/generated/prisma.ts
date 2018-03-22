import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type Category implements Node {
  id: ID!
  name: String!
  description: String
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

type Item implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  name: String!
  description: String
  category(where: CategoryWhereInput): Category!
  type(where: ItemTypeWhereInput): ItemType!
}

type ItemType implements Node {
  id: ID!
  name: String!
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
}

type AggregateCategory {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateItemType {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

"""
A connection to a list of items.
"""
type CategoryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
  description: String
  items: ItemCreateManyWithoutCategoryInput
}

input CategoryCreateOneWithoutItemsInput {
  create: CategoryCreateWithoutItemsInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutItemsInput {
  name: String!
  description: String
}

"""
An edge in a connection.
"""
type CategoryEdge {
  """
  The item at the end of the edge.
  """
  node: Category!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
  description: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategorySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategorySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  name: String
  description: String
  items: ItemUpdateManyWithoutCategoryInput
}

input CategoryUpdateOneWithoutItemsInput {
  create: CategoryCreateWithoutItemsInput
  connect: CategoryWhereUniqueInput
  disconnect: CategoryWhereUniqueInput
  delete: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutItemsInput
  upsert: CategoryUpsertWithoutItemsInput
}

input CategoryUpdateWithoutItemsDataInput {
  name: String
  description: String
}

input CategoryUpdateWithoutItemsInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutItemsDataInput!
}

input CategoryUpsertWithoutItemsInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutItemsDataInput!
  create: CategoryCreateWithoutItemsInput!
}

input CategoryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategoryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategoryWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
A connection to a list of items.
"""
type ItemConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  isPublished: Boolean
  name: String!
  description: String
  category: CategoryCreateOneWithoutItemsInput!
  type: ItemTypeCreateOneInput!
}

input ItemCreateManyWithoutCategoryInput {
  create: [ItemCreateWithoutCategoryInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateWithoutCategoryInput {
  isPublished: Boolean
  name: String!
  description: String
  type: ItemTypeCreateOneInput!
}

"""
An edge in a connection.
"""
type ItemEdge {
  """
  The item at the end of the edge.
  """
  node: Item!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type ItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  name: String!
  description: String
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ItemSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ItemSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

"""
A connection to a list of items.
"""
type ItemTypeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ItemTypeEdge]!
  aggregate: AggregateItemType!
}

input ItemTypeCreateInput {
  name: String!
}

input ItemTypeCreateOneInput {
  create: ItemTypeCreateInput
  connect: ItemTypeWhereUniqueInput
}

"""
An edge in a connection.
"""
type ItemTypeEdge {
  """
  The item at the end of the edge.
  """
  node: ItemType!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ItemTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemTypePreviousValues {
  id: ID!
  name: String!
}

type ItemTypeSubscriptionPayload {
  mutation: MutationType!
  node: ItemType
  updatedFields: [String!]
  previousValues: ItemTypePreviousValues
}

input ItemTypeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ItemTypeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ItemTypeSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemTypeWhereInput
}

input ItemTypeUpdateDataInput {
  name: String
}

input ItemTypeUpdateInput {
  name: String
}

input ItemTypeUpdateNestedInput {
  where: ItemTypeWhereUniqueInput!
  data: ItemTypeUpdateDataInput!
}

input ItemTypeUpdateOneInput {
  create: ItemTypeCreateInput
  connect: ItemTypeWhereUniqueInput
  disconnect: ItemTypeWhereUniqueInput
  delete: ItemTypeWhereUniqueInput
  update: ItemTypeUpdateNestedInput
  upsert: ItemTypeUpsertNestedInput
}

input ItemTypeUpsertNestedInput {
  where: ItemTypeWhereUniqueInput!
  update: ItemTypeUpdateDataInput!
  create: ItemTypeCreateInput!
}

input ItemTypeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ItemTypeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ItemTypeWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
}

input ItemTypeWhereUniqueInput {
  id: ID
}

input ItemUpdateInput {
  isPublished: Boolean
  name: String
  description: String
  category: CategoryUpdateOneWithoutItemsInput
  type: ItemTypeUpdateOneInput
}

input ItemUpdateManyWithoutCategoryInput {
  create: [ItemCreateWithoutCategoryInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithoutCategoryInput!]
  upsert: [ItemUpsertWithoutCategoryInput!]
}

input ItemUpdateWithoutCategoryDataInput {
  isPublished: Boolean
  name: String
  description: String
  type: ItemTypeUpdateOneInput
}

input ItemUpdateWithoutCategoryInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutCategoryDataInput!
}

input ItemUpsertWithoutCategoryInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutCategoryDataInput!
  create: ItemCreateWithoutCategoryInput!
}

input ItemWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ItemWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ItemWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  isPublished: Boolean
  """
  All values that are not equal to given value.
  """
  isPublished_not: Boolean
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  category: CategoryWhereInput
  type: ItemTypeWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createItem(data: ItemCreateInput!): Item!
  createCategory(data: CategoryCreateInput!): Category!
  createItemType(data: ItemTypeCreateInput!): ItemType!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateItemType(data: ItemTypeUpdateInput!, where: ItemTypeWhereUniqueInput!): ItemType
  deleteUser(where: UserWhereUniqueInput!): User
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteItemType(where: ItemTypeWhereUniqueInput!): ItemType
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertItemType(where: ItemTypeWhereUniqueInput!, create: ItemTypeCreateInput!, update: ItemTypeUpdateInput!): ItemType!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput!): BatchPayload!
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput!): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput!): BatchPayload!
  updateManyItemTypes(data: ItemTypeUpdateInput!, where: ItemTypeWhereInput!): BatchPayload!
  deleteManyUsers(where: UserWhereInput!): BatchPayload!
  deleteManyItems(where: ItemWhereInput!): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput!): BatchPayload!
  deleteManyItemTypes(where: ItemTypeWhereInput!): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  itemTypes(where: ItemTypeWhereInput, orderBy: ItemTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ItemType]!
  user(where: UserWhereUniqueInput!): User
  item(where: ItemWhereUniqueInput!): Item
  category(where: CategoryWhereUniqueInput!): Category
  itemType(where: ItemTypeWhereUniqueInput!): ItemType
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  itemTypesConnection(where: ItemTypeWhereInput, orderBy: ItemTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemTypeConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  itemType(where: ItemTypeSubscriptionWhereInput): ItemTypeSubscriptionPayload
}
`

export type ItemOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type CategoryOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC'

export type ItemTypeOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface CategoryCreateOneWithoutItemsInput {
  create?: CategoryCreateWithoutItemsInput
  connect?: CategoryWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface ItemTypeUpsertNestedInput {
  where: ItemTypeWhereUniqueInput
  update: ItemTypeUpdateDataInput
  create: ItemTypeCreateInput
}

export interface ItemCreateManyWithoutCategoryInput {
  create?: ItemCreateWithoutCategoryInput[] | ItemCreateWithoutCategoryInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface ItemTypeUpdateDataInput {
  name?: String
}

export interface CategoryCreateInput {
  name: String
  description?: String
  items?: ItemCreateManyWithoutCategoryInput
}

export interface ItemTypeUpdateNestedInput {
  where: ItemTypeWhereUniqueInput
  data: ItemTypeUpdateDataInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
}

export interface ItemTypeUpdateOneInput {
  create?: ItemTypeCreateInput
  connect?: ItemTypeWhereUniqueInput
  disconnect?: ItemTypeWhereUniqueInput
  delete?: ItemTypeWhereUniqueInput
  update?: ItemTypeUpdateNestedInput
  upsert?: ItemTypeUpsertNestedInput
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface CategoryUpsertWithoutItemsInput {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutItemsDataInput
  create: CategoryCreateWithoutItemsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface CategoryUpdateWithoutItemsDataInput {
  name?: String
  description?: String
}

export interface ItemUpsertWithoutCategoryInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutCategoryDataInput
  create: ItemCreateWithoutCategoryInput
}

export interface CategoryUpdateWithoutItemsInput {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutItemsDataInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface CategoryUpdateOneWithoutItemsInput {
  create?: CategoryCreateWithoutItemsInput
  connect?: CategoryWhereUniqueInput
  disconnect?: CategoryWhereUniqueInput
  delete?: CategoryWhereUniqueInput
  update?: CategoryUpdateWithoutItemsInput
  upsert?: CategoryUpsertWithoutItemsInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
}

export interface ItemUpdateInput {
  isPublished?: Boolean
  name?: String
  description?: String
  category?: CategoryUpdateOneWithoutItemsInput
  type?: ItemTypeUpdateOneInput
}

export interface ItemUpdateWithoutCategoryInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutCategoryDataInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
}

export interface CategoryUpdateInput {
  name?: String
  description?: String
  items?: ItemUpdateManyWithoutCategoryInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
}

export interface ItemTypeWhereInput {
  AND?: ItemTypeWhereInput[] | ItemTypeWhereInput
  OR?: ItemTypeWhereInput[] | ItemTypeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface ItemCreateInput {
  isPublished?: Boolean
  name: String
  description?: String
  category: CategoryCreateOneWithoutItemsInput
  type: ItemTypeCreateOneInput
}

export interface ItemTypeUpdateInput {
  name?: String
}

export interface ItemCreateWithoutCategoryInput {
  isPublished?: Boolean
  name: String
  description?: String
  type: ItemTypeCreateOneInput
}

export interface ItemWhereUniqueInput {
  id?: ID_Input
}

export interface ItemUpdateManyWithoutCategoryInput {
  create?: ItemCreateWithoutCategoryInput[] | ItemCreateWithoutCategoryInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithoutCategoryInput[] | ItemUpdateWithoutCategoryInput
  upsert?: ItemUpsertWithoutCategoryInput[] | ItemUpsertWithoutCategoryInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput
  OR?: ItemWhereInput[] | ItemWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  category?: CategoryWhereInput
  type?: ItemTypeWhereInput
}

export interface ItemTypeCreateInput {
  name: String
}

export interface ItemTypeCreateOneInput {
  create?: ItemTypeCreateInput
  connect?: ItemTypeWhereUniqueInput
}

export interface CategoryCreateWithoutItemsInput {
  name: String
  description?: String
}

export interface ItemTypeSubscriptionWhereInput {
  AND?: ItemTypeSubscriptionWhereInput[] | ItemTypeSubscriptionWhereInput
  OR?: ItemTypeSubscriptionWhereInput[] | ItemTypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemTypeWhereInput
}

export interface ItemTypeWhereUniqueInput {
  id?: ID_Input
}

export interface ItemUpdateWithoutCategoryDataInput {
  isPublished?: Boolean
  name?: String
  description?: String
  type?: ItemTypeUpdateOneInput
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ItemType extends Node {
  id: ID_Output
  name: String
}

export interface ItemTypePreviousValues {
  id: ID_Output
  name: String
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface ItemTypeEdge {
  node: ItemType
  cursor: String
}

export interface AggregateItemType {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface ItemTypeConnection {
  pageInfo: PageInfo
  edges: ItemTypeEdge[]
  aggregate: AggregateItemType
}

export interface AggregateCategory {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface AggregateItem {
  count: Int
}

export interface Category extends Node {
  id: ID_Output
  name: String
  description?: String
  items?: Item[]
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: ItemEdge[]
  aggregate: AggregateItem
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface CategoryPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

export interface ItemPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  name: String
  description?: String
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item
  updatedFields?: String[]
  previousValues?: ItemPreviousValues
}

export interface Item extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  name: String
  description?: String
  category: Category
  type: ItemType
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

export interface ItemTypeSubscriptionPayload {
  mutation: MutationType
  node?: ItemType
  updatedFields?: String[]
  previousValues?: ItemTypePreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type DateTime = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  items: (args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Item[]>
  categories: (args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Category[]>
  itemTypes: (args: { where?: ItemTypeWhereInput, orderBy?: ItemTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ItemType[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  item: (args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Item | null>
  category: (args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  itemType: (args: { where: ItemTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ItemType | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  itemsConnection: (args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ItemConnection>
  categoriesConnection: (args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CategoryConnection>
  itemTypesConnection: (args: { where?: ItemTypeWhereInput, orderBy?: ItemTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ItemTypeConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createItem: (args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Item>
  createCategory: (args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Category>
  createItemType: (args: { data: ItemTypeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<ItemType>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateItem: (args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Item | null>
  updateCategory: (args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  updateItemType: (args: { data: ItemTypeUpdateInput, where: ItemTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ItemType | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteItem: (args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Item | null>
  deleteCategory: (args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  deleteItemType: (args: { where: ItemTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ItemType | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertItem: (args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Item>
  upsertCategory: (args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Category>
  upsertItemType: (args: { where: ItemTypeWhereUniqueInput, create: ItemTypeCreateInput, update: ItemTypeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<ItemType>
  updateManyUsers: (args: { data: UserUpdateInput, where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyItems: (args: { data: ItemUpdateInput, where: ItemWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCategories: (args: { data: CategoryUpdateInput, where: CategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyItemTypes: (args: { data: ItemTypeUpdateInput, where: ItemTypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyItems: (args: { where: ItemWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCategories: (args: { where: CategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyItemTypes: (args: { where: ItemTypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  item: (args: { where?: ItemSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ItemSubscriptionPayload>>
  category: (args: { where?: CategorySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CategorySubscriptionPayload>>
  itemType: (args: { where?: ItemTypeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ItemTypeSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Item: (where: ItemWhereInput): Promise<boolean> => super.existsDelegate('query', 'items', { where }, {}, '{ id }'),
    Category: (where: CategoryWhereInput): Promise<boolean> => super.existsDelegate('query', 'categories', { where }, {}, '{ id }'),
    ItemType: (where: ItemTypeWhereInput): Promise<boolean> => super.existsDelegate('query', 'itemTypes', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    items: (args, info): Promise<Item[]> => super.delegate('query', 'items', args, {}, info),
    categories: (args, info): Promise<Category[]> => super.delegate('query', 'categories', args, {}, info),
    itemTypes: (args, info): Promise<ItemType[]> => super.delegate('query', 'itemTypes', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    item: (args, info): Promise<Item | null> => super.delegate('query', 'item', args, {}, info),
    category: (args, info): Promise<Category | null> => super.delegate('query', 'category', args, {}, info),
    itemType: (args, info): Promise<ItemType | null> => super.delegate('query', 'itemType', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    itemsConnection: (args, info): Promise<ItemConnection> => super.delegate('query', 'itemsConnection', args, {}, info),
    categoriesConnection: (args, info): Promise<CategoryConnection> => super.delegate('query', 'categoriesConnection', args, {}, info),
    itemTypesConnection: (args, info): Promise<ItemTypeConnection> => super.delegate('query', 'itemTypesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createItem: (args, info): Promise<Item> => super.delegate('mutation', 'createItem', args, {}, info),
    createCategory: (args, info): Promise<Category> => super.delegate('mutation', 'createCategory', args, {}, info),
    createItemType: (args, info): Promise<ItemType> => super.delegate('mutation', 'createItemType', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateItem: (args, info): Promise<Item | null> => super.delegate('mutation', 'updateItem', args, {}, info),
    updateCategory: (args, info): Promise<Category | null> => super.delegate('mutation', 'updateCategory', args, {}, info),
    updateItemType: (args, info): Promise<ItemType | null> => super.delegate('mutation', 'updateItemType', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteItem: (args, info): Promise<Item | null> => super.delegate('mutation', 'deleteItem', args, {}, info),
    deleteCategory: (args, info): Promise<Category | null> => super.delegate('mutation', 'deleteCategory', args, {}, info),
    deleteItemType: (args, info): Promise<ItemType | null> => super.delegate('mutation', 'deleteItemType', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertItem: (args, info): Promise<Item> => super.delegate('mutation', 'upsertItem', args, {}, info),
    upsertCategory: (args, info): Promise<Category> => super.delegate('mutation', 'upsertCategory', args, {}, info),
    upsertItemType: (args, info): Promise<ItemType> => super.delegate('mutation', 'upsertItemType', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyItems: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyItems', args, {}, info),
    updateManyCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCategories', args, {}, info),
    updateManyItemTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyItemTypes', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyItems: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyItems', args, {}, info),
    deleteManyCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCategories', args, {}, info),
    deleteManyItemTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyItemTypes', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    item: (args, infoOrQuery): Promise<AsyncIterator<ItemSubscriptionPayload>> => super.delegateSubscription('item', args, {}, infoOrQuery),
    category: (args, infoOrQuery): Promise<AsyncIterator<CategorySubscriptionPayload>> => super.delegateSubscription('category', args, {}, infoOrQuery),
    itemType: (args, infoOrQuery): Promise<AsyncIterator<ItemTypeSubscriptionPayload>> => super.delegateSubscription('itemType', args, {}, infoOrQuery)
  }
}