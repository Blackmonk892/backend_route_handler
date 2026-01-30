import { NextResponse } from "next/server";

export const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    age: 35,
  },
];
export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const age = searchParams.get("age");

    let filteredUsers = users;

    if (age) {
      filteredUsers = filteredUsers.filter((user) => user.age === Number(age));
    }

    if (name) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return NextResponse.json({
      success: true,
      data: users,
      total: users.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch users",
      },
      { status: 500 },
    );
  }
}
