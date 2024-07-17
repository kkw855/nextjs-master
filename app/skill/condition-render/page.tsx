type UserType = 'admin' | 'editor' | 'user'

type User = Readonly<{
  name: string
  type: UserType
}>

const users: readonly User[] = [
  { name: 'john', type: 'admin' },
  { name: 'mike', type: 'editor' },
  { name: 'abdelrahman', type: 'user' },
]

const userActionStates: Readonly<Record<UserType, string[]>> = {
  admin: ['create', 'read', 'update', 'delete'],
  editor: ['create', 'read', 'update'],
  user: ['read', 'update'],
}

const Action = (props: { action: string }) => (
  <p className="mx-2 rounded-md border-[1px] px-2 py-1">{props.action}</p>
)

const ConditionRenderPage = () => (
  <ul>
    {users.map((user) => (
      <li key={user.name}>
        <p>{user.name}</p>
        <div className="flex items-center">
          user actions:{' '}
          {userActionStates[user.type].map((action) => (
            <Action key={action} action={action} />
          ))}
        </div>
      </li>
    ))}
  </ul>
)

export default ConditionRenderPage
